import express, { Request, Response } from "express";
import Movie from "../movie.model";
import { movieControllers } from "./movie.controller";
const router = express.Router();

router.post("/", movieControllers.createMovie);
router.get("/", movieControllers.getAllMovies);
router.get("/:movieId", movieControllers.getAMovie);

router.get("/:slug", movieControllers.getMovieBySlug);

export const moviesRoute = router;
