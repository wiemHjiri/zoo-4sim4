import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cat{
    @Prop({required:true})
    name:string;
    @Prop()
    age:number;
    @Prop()
    breed:string;
}

export const catShcema=SchemaFactory.createForClass(Cat);
