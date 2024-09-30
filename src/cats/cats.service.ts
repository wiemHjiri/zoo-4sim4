import { Injectable } from '@nestjs/common';
import { Cat } from './entity/cat';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './catsDto/createCatsDto';

@Injectable()
export class CatsService {
    //private cats:Cat[]=[];
    constructor(@InjectModel(Cat.name) private catModel:Model<Cat> ){}

   async getAll():Promise<Cat[]> {
        return this.catModel.find();
    }

    async addCat(catDto:CreateCatDto):Promise<Cat>{
        
        return this.catModel.create(catDto);
    }

    async findCatById(id:any):Promise<Cat>{
        console.log("id ::::::::::::::::::::"+id);
        return this.catModel.findById(id);
      }

}
