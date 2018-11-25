import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instructor } from '../entity/Instructor';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';

@Module({
    imports: [TypeOrmModule.forFeature([Instructor])],
    controllers: [InstructorsController],
    providers: [InstructorsService],
    exports: [InstructorsService],
})
export class InstructorsModule {}
