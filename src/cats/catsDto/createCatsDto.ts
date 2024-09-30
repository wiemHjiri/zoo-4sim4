import { IsInt, IsString } from "class-validator";

export class CreateCatDto{
    @IsString()   
    name:string;
    @IsInt() 
    age:number;
    @IsString()  // must be a string to be considered a valid breed (for example, 'Siamese', 'Persian', 'Maine Coon')  // this could be extended to include more specific breeds or a database lookup if needed.  For now, we'll just use a string.  A real application would likely use a database or a lookup service.  For example, a 'breeds' table with a 'name' column and a '
    breed:string;
}