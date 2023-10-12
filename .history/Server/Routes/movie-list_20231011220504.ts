import express from 'express';
const router = express.Router();
export default router;

//create a clothing controller instance
import {DisplayMovieListPage} from "../Controllers/movie-list";

/*Get Clothing- list page /clothing-list */
router.get('/movie-list',DisplayMovieListPage);

/*Dislay edit/:id page -  /clothing-list/edit:id */