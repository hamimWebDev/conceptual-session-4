import mongoose, { Schema } from "mongoose";
import { IMovie, IReview } from "./movies/movie.interface";

// Define the Review schema
const reviewSchema: Schema<IReview> = new Schema({
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
});

// Define the Movie schema
const movieSchema: Schema<IMovie> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  viewCount: {
    type: Number,
    required: true,
    default: 0,
  },
  reviews: [reviewSchema],
});

// Create the Movie model
const Movie = mongoose.model<IMovie>("Movie", movieSchema);

export default Movie;
