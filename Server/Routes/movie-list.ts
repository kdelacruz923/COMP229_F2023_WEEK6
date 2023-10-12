import express from 'express';
const router = express.Router();


//create a clothing controller instance
import {DisplayMovieListPage} from "../Controllers/movie-list";

/*Get Clothing- list page /clothing-list */
router.get('/movie-list',DisplayMovieListPage);

export default router;

/*Dislay edit/:id page -  /clothing-list/edit:id */