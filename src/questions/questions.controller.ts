import { Controller, Get, Post, Body, Param, Put, Delete, Req } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { StudentsService } from '../students/students.service';
import { Question } from '../entity/Question';

@Controller('api/questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService, private readonly studentsService: StudentsService){}

    @Post()
    async create(@Body() question: Question){
        return this.questionsService.create(question);
    }

    @Get()
    async findAll(@Req() req): Promise<any>{
        const questions = await this.questionsService.findAll();
        const student = await this.studentsService.findOne(req.decoded);
        console.log(student);
        return {questions, currentQuestion: student.currentQuestion};
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.questionsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() question: Question){
        return this.questionsService.update(id, question);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return this.questionsService.remove(id);
    }
}
