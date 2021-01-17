import express from 'express';
import { getMovieReviews, getMovieCredits, getMovie } from '../tmdb-api';
import movieModel from './movieModel';

const router = express.Router(); 

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

//switched getmovies from database to tmdb-api
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  // movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
  getMovie(id)
  .then(movie => res.status(200).send(movie))
  .catch((error) => next(error));
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieCredits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
});

export default router;