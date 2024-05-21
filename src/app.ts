import express, { Request, Response } from "express";
import { moviesRoute } from "./modules/movies/movie.route";
export const app = express();

//parsers
app.use(express.json());

app.use("/api/movies", moviesRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
