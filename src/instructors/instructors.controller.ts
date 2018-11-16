import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { Instructor } from '../entity/Instructor';

@Controller('instructors')
export class InstructorsController {
    constructor(private readonly instructorsService: InstructorsService){}

    @Post()
    async create(@Body() instructor: Instructor){
        return this.instructorsService.create(instructor);
    }

    @Get()
    async findAll(): Promise<Instructor[]>{
        return this.instructorsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.instructorsService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() instructor: Instructor){
        return this.instructorsService.update(id, instructor);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return this.instructorsService.remove(id);
    }
}