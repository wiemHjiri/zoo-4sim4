import { PartialType } from "@nestjs/mapped-types";
import { CreateCatDto } from "./createCatsDto";

export class UpdateCatDto extends PartialType(CreateCatDto){
    
}