import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { StudentsService } from './students.service';
import { QuestionsService } from '../questions/questions.service';
import { Student } from '../entity/Student';

@Controller('api/students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService, private readonly questionsService: QuestionsService){}

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

    @Put('progress/:q_id')
    async progress(@Param('q_id') q_id, @Req() req){
        // const questions = await this.questionsService.findAll();
        const student = await this.studentsService.findOne(req.decoded);
        student.currentQuestion = await this.questionsService.findOne(q_id);
        return this.studentsService.update(student.id, student);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return this.studentsService.remove(id);
    }
}
