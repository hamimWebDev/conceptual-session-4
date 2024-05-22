import { Request, Response } from "express";
import { MovieService } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieService.createMovie(movieData);

  res.json({
    success: true,
    message: "Movie data send successfully!",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieService.getAllMovies();

  res.status(200).json({
    success: true,
    message: "Movies fetched successfully!",
    data: result,
  });
};

const getAMovie = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieService.getAMovie(movieId);

  res.status(200).json({
    success: true,
    message: "Movie fetched successfully!",
    data: result,
  });
};

const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await MovieService.getMovieBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

export const movieControllers = {
  createMovie,
  getAllMovies,
  getMovieBySlug,
  getAMovie
};
