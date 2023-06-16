import { Request, Response } from "express";
import Dog from "../models/dog.model";

const findAll = async (req: Request, res: Response) => {
  const page = req.query.pageNumber !== undefined && typeof req.query.page === 'string' ?  parseInt(req.query.page, 10) : 1;
  const limit = Number(req.query.limit) | 10;
  const skip = (page - 1) * limit;

  const attribute = req.query.attribute as string || "id";
  const order = req.query.order ? (req.query.order === "asc" ? "ASC" : "DESC") : "ASC";

  const dogs = await Dog.findAll({
    order: [attribute, order],
    offset: skip,
    limit: limit
  });

  return res.json(dogs);
}

const create = async (req: Request, res: Response) => {
  const body = req.body;

  const existingDog = await Dog.findOne({
    where: {
      name: body.name
    }
  })

  if(existingDog) {
    res.status(400).send('There is an existing dog with such name!')
  }

  if(body.name.length === 0) {
    res.status(400).send('Color is empty');
  }

  if(body.color.length === 0) {
    res.status(400).send('Color field is empty');
  }

  if(!isNaN(body.tail_length) && body.tail_length < 0){
    res.status(400).send('Tail length is not valid number');
  }

  if(!isNaN(body.weigth) && body.weigth < 0){
    res.status(400).send('Weight is not valid number');
  }

  const dog = await Dog.create({
    name: body.name,
    color: body.color,
    tail_length: +body.tail_length,
    weight: +body.weight
  })

  return res.status(201).json(dog);
}

export { findAll, create };