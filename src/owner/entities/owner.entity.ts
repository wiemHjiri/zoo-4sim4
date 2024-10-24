import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Cat } from "src/cats/entity/cat";

@Schema()
export class Owner {
    @Prop()
    name:string;
    @Prop([{type: mongoose.Schema.Types.ObjectId, ref:'cats'}])
    cats:Cat[];
}

export const OwnerShcema=SchemaFactory.createForClass(Owner);
