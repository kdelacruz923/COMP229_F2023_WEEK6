import express from 'express';
const router = express.Router();
export default router;

//create a clothing controller instance
import {DisplayMovieListPage} from "../Controllers/m";

/*Get Clothing- list page /clothing-list */
router.get('/',DisplayClothingListPage);

/*Diplay edit/:id page -  /clothing-list/edit:id */