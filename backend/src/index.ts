import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from './routes';
dotenv.config();
import dbConnection from './utility/db';

const start = async()=>{
  const app: Express = express();
  const port = process.env.PORT || 3000;
  await dbConnection();
  app.use(router);

  app.get("/", (req: Request, res: Response) => {
    res.send("Home Route");
  });

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

start();