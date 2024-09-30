import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './catsDto/createCatsDto';
import { CatsService } from './cats.service';
import { Cat } from './entity/cat';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @Get()
   async findAll() :Promise<CreateCatDto[]>{

        return this.catsService.getAll();
    }


    @Post()
    create( @Body() createCatDto:CreateCatDto):Promise<Cat>{
        
        return this.catsService.addCat(createCatDto);
    }

    @Get(":id")
    async findOne( @Param('id') id :any):Promise<Cat>{
        //console.log("id:::::::::::::::::",id);
        return this.catsService.findCatById(id);
    }




}
