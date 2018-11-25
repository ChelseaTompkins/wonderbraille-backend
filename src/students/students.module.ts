import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../entity/Student';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
    imports: [TypeOrmModule.forFeature([Student])],
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [StudentsService],
})
export class StudentsModule {}