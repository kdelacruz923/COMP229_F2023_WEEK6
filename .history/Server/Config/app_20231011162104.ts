import createError from 'http-errors';
import express from 'express';
import  path from 'path';
import  cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose, {mongo} from 'mongoose';

import indexRouter from '../Routes/index';
import ClothingRouter from '../Routes/clothing';

//App Configuration
const app = express();
export default app;      //exports app as the default object for this module

//DB Configuration
import * as DBConfig from "./db";
//useNewUrlParser - deprecated in mongoose v6.0.0
//mongoose.connect(DBConfig.LocalURI, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connect('mongodb://127.0.0.1:27017/clothing_store');





const db= mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));
db.once('open', function()
{
    console.log(`connected to MongoDB at ${DBConfig.Hostname}`);
    console.log(db);
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, "../../node_modules")));


//Routing happens
app.use('/', indexRouter);
app.use('/clothing-list', ClothingRouter);  //define a new area of website called clothing-list


// catch 404 and forward to error handler
app.use(function(req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
