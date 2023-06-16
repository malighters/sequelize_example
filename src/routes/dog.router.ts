import { Router } from "express";
import { create, findAll } from "../controllers/dog.controller";

const dogRouter = Router();

dogRouter.get('/dogs', findAll);
''
dogRouter.post('/dog', create);

export default dogRouter;