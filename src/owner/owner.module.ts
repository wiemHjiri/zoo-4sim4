import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Owner, OwnerShcema } from './entities/owner.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:Owner.name, schema:OwnerShcema}])],
  exports: [OwnerService],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}



