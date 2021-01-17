import express from 'express';
import { getSimilarMovies } from '../tmdb-api';
import popularMovieModel from './popularMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  popularMovieModel.find().then(popularMovies => res.status(200).send(popularMovies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  popularMovieModel.findByMovieDBId(id).then(popularMovies => res.status(200).send(popularMovies)).catch(next);
});

router.get('/:id/similarMovies', (req, res, next) => {
  const id = parseInt(req.params.id);
  getSimilarMovies(id)
  .then(similarMovies => res.status(200).send(similarMovies))
  .catch((error) => next(error));
});

export default router;