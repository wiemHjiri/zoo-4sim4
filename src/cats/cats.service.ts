import { Injectable } from '@nestjs/common';
import { Cat } from './entity/cat';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './catsDto/createCatsDto';
import { UpdateCatDto } from './catsDto/updateCatdto';

@Injectable()
export class CatsService {
    //private cats:Cat[]=[];
    constructor(@InjectModel(Cat.name) private catModel:Model<Cat> ){}

   async getAll():Promise<Cat[]> {
        return this.catModel.find().populate("owner");
    }

    async addCat(catDto:CreateCatDto):Promise<Cat>{
        
        return this.catModel.create(catDto);
    }

    async findCatById(id:any):Promise<Cat>{
        console.log("id ::::::::::::::::::::"+id);
        return this.catModel.findById(id);
      }
      async updateCat(id:any,cat:UpdateCatDto):Promise<Cat>{
        return this.catModel.findByIdAndUpdate(id, cat, {new: true});

      }

      async removeCat(id:any):Promise<Cat>{
        return this.catModel.findByIdAndDelete(id);
      }

      async findCatByName(name:string):Promise<Cat>{
        return this.catModel.findOne({name:name}).exec();
      }




}
