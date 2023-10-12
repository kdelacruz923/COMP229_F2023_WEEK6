import express, { Request, Response, NextFunction } from 'express';
import Movie from '../Models/movie';

export function DisplayMovieListPage(req: Request, res: Response, next: NextFunction): void {
  console.log('Before query');

  let moviesCollection: any; // Use 'any' type

  Movie.find({})
    .then(result => {
      console.log('Query result:', result);
      moviesCollection = result;
      console.log('After query');

      // Render the movie-list content partial page
      res.render('index', { title: 'Movie List', page: 'movie-list', clothing: moviesCollection });
    })
    .catch(err => {
      console.error('Query error:', err);
      console.log('After query');

      // Handle the error or render an error page
      res.status(500).render('error', { error: 'Internal Server Error' });
    });
}
