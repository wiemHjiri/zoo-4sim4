import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateCatDto } from './catsDto/createCatsDto';
import { CatsService } from './cats.service';
import { Cat } from './entity/cat';
import { UpdateCatDto } from './catsDto/updateCatdto';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Get()
   async findAll() :Promise<CreateCatDto[]>{
        return this.catsService.getAll();
    }


    @Post()
    async create( @Body() createCatDto:CreateCatDto):Promise<Cat>{
        
        return await this.catsService.addCat(createCatDto);
    }

    @Get(":id")
    async findOne( @Param('id') id :any):Promise<Cat>{
        //console.log("id:::::::::::::::::",id);
        return await this.catsService.findCatById(id);
    }

    @Patch(":_id")
    async update(@Param() id:any,@Body() updateCatdto:UpdateCatDto){
        return await this.catsService.updateCat(id,updateCatdto);
    }

@Delete(":id")
async delete(@Param("id") id:string):Promise<Cat>{
    return await this.catsService.removeCat(id);
}

@Get("/byname/:name")
async findByName(@Param("name") name:string):Promise<Cat>{
    return await this.catsService.findCatByName(name);
}

@Get("/byage:age")
async getByAge(@Param(":age")age:string):Promise<Cat>{
    throw new HttpException("FORBIDDEN", HttpStatus.FORBIDDEN);
}
}
