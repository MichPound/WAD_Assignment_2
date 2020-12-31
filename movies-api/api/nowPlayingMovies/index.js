import express from 'express';
import { getMovieReviews } from '../tmdb-api';
import nowPlayingMovieModel from './nowPlayingMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  nowPlayingMovieModel.find().then(nowPlaingMovies => res.status(200).send(nowPlaingMovies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  nowPlayingMovieModel.findByMovieDBId(id).then(nowPlaingMovies => res.status(200).send(nowPlaingMovies)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;