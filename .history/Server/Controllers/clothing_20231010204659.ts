import express, {Request, Response, NextFunction} from 'express';

//import Clothing from "../Models/clothing";
import Clothing, { ClothingDocument } from '../Models/Clothing'; 
import { AnyArray, AnyObject } from 'mongoose';

export function DisplayClothingListPage(req:Request, res:Response, next:NextFunction):void
{
    Clothing.find(function(err, clothing) {
   
        if(err)
        {
            return console.error(err);
        }
       console.log(Clothing);
        // render the clothing-list content partial page
      
    });
}

