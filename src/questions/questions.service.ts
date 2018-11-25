import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entity/Question';

@Injectable()
export class QuestionsService{
    constructor(
        @InjectRepository(Question)
        private readonly questionRepository: Repository<Question>,
    ) {}

    async create(question: Question) {
        return await this.questionRepository.save(question);
    }

    async findAll(): Promise<Question[]> {
        return await this.questionRepository.find();
    }

    async findOne(id: number){
        return await this.questionRepository.findOne(id);
    }

    async update(id: number, question: Question){
        return await this.questionRepository.update(id, question);
    }

    async remove(id: number){
        const question = await this.questionRepository.findOne(id);
        return await this.questionRepository.remove(question);
    }
}
