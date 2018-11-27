import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from '../entity/Student';
import { CoursesService } from '../courses/courses.service';
import { QuestionsService } from '../questions/questions.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentsService{
    private saltRounds = 10;
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        private readonly courseService: CoursesService,
        private readonly questionService: QuestionsService,
    ) {}

    async getStudentByStudentEmail(studentEmail: string): Promise<Student> {
        return (await this.studentRepository.find({ studentEmail }))[0];
      }

    async create(student: Student): Promise<Student> {
        student.passwordHash = await this.getHash(student.studentPassword);
        student.studentPassword = undefined;
        student.course = (await this.courseService.findAll())[0];
        student.currentQuestion = (await this.questionService.findAll())[0];
        return await this.studentRepository.save(student);
    }

    async getHash(studentPassword: string|undefined): Promise<string> {
        return bcrypt.hash(studentPassword, this.saltRounds);
    }

    async compareHash(studentPassword: string|undefined, hash: string|undefined): Promise<boolean> {
        return bcrypt.compare(studentPassword, hash);
    }

    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    async findOne(id: number){
        return await this.studentRepository.findOne(id, { relations: ['currentQuestion'] });
    }

    async update(id: number, student: Student){
        return await this.studentRepository.update(id, student);
    }

    async remove(id: number){
        const student = await this.studentRepository.findOne(id);
        return await this.studentRepository.remove(student);
    }
}
