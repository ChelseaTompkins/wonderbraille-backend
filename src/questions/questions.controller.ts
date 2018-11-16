import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from '../entity/Question';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionsService: QuestionsService){}

    @Post()
    async create(@Body() question: Question){
        return this.questionsService.create(question);
    }

    @Get()
    async findAll(): Promise<Question[]>{
        return this.questionsService.findAll();
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
