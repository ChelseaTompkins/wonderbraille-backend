import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from '../entity/Course';

@Injectable()
export class CoursesService{
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>, 
    ) {}

    async create(course: Course) {
        return await this.courseRepository.save(course);
    }

    async findAll(): Promise<Course[]> {
        return await this.courseRepository.find();
    }

    async findOne(id: number){
        return await this.courseRepository.findOne(id)
    }

    async update(id: number, course: Course){
        return await this.courseRepository.update(id, course)
    }

    async remove(id: number){
        let course = await this.courseRepository.findOne(id)
        return await this.courseRepository.remove(course);
    }
}
