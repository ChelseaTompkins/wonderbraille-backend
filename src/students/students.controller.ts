import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from '../entity/Student';

@Controller('api/students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService){}

    @Post()
    async create(@Body() student: Student){
        return this.studentsService.create(student);
    }

    @Get()
    async findAll(): Promise<Student[]>{
        return this.studentsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.studentsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() student: Student){
        return this.studentsService.update(id, student);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return this.studentsService.remove(id);
    }
}
