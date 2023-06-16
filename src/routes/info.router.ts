import { Router } from "express";
import ping from "../controllers/info.controller";

const infoRouter = Router();

infoRouter.get('/ping', ping);

export default infoRouter;