import { Request, Response } from "express";

const ping = (req: Request, res: Response) => {
  res.status(200).send('Dogshouseservice.Version1.0.1');
}

export default ping;