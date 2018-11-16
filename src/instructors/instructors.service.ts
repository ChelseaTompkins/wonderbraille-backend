import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instructor } from '../entity/Instructor';

@Injectable()
export class InstructorsService{
    constructor(
        @InjectRepository(Instructor)
        private readonly instructorRepository: Repository<Instructor>, 
    ) {}

    async create(instructor: Instructor) {
        return await this.instructorRepository.save(instructor);
    }

    async findAll(): Promise<Instructor[]> {
        return await this.instructorRepository.find();
    }

    async findOne(id: number){
        return await this.instructorRepository.findOne(id)
    }

    async update(id: number, instructor: Instructor){
        return await this.instructorRepository.update(id, instructor)
    }

    async remove(id: number){
        let instructor = await this.instructorRepository.findOne(id)
        return await this.instructorRepository.remove(instructor);
    }
}
