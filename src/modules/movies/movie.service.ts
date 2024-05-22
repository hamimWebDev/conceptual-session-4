import Movie from "../movie.model";
import { IMovie } from "./movie.interface";

const createMovie = async (payLoad: IMovie) => {
  const result = await Movie.create(payLoad);
  return result;
};

const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};
const getAMovie = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const MovieService = {
  createMovie,
  getAllMovies,
  getAMovie,
  getMovieBySlug,
};
