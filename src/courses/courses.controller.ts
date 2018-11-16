import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from '../entity/Course';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){}

    @Post()
    async create(@Body() course: Course){
        return this.coursesService.create(course);
    }

    @Get()
    async findAll(): Promise<Course[]>{
        return this.coursesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.coursesService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() course: Course){
        return this.coursesService.update(id, course);
    }

    @Delete(':id')
    async remove(@Param('id') id){
        return this.coursesService.remove(id);
    }
}

