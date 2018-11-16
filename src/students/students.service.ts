import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/Student';

@Injectable()
export class StudentsService{
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>, 
    ) {}

    async create(student: Student) {
        return await this.studentRepository.save(student);
    }

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    async findOne(id: number){
        return await this.studentRepository.findOne(id)
    }

    async update(id: number, student: Student){
        return await this.studentRepository.update(id, student)
    }

    async remove(id: number){
        let student = await this.studentRepository.findOne(id)
        return await this.studentRepository.remove(student);
    }
}
