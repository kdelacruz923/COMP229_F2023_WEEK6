"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMovieListPage = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayMovieListPage(req, res, next) {
    console.log('Before query');
    let moviesCollection;
    movie_1.default.find({})
        .then(result => {
        console.log('Query result:', result);
        moviesCollection = result;
        console.log('After query');
    })
        .catch(err => {
        console.error('Query error:', err);
        console.log('After query');
        res.render('index', { title: 'Movie List', page: 'movie-list', clothing: moviesCollection });
    })
        .catch((err) => {
        console.error('Query error:', err);
        console.log('After query');
        res.status(500).render('error', { error: 'Internal Server Error' });
    });
}
exports.DisplayMovieListPage = DisplayMovieListPage;
//# sourceMappingURL=movie-list.js.map