import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from '../entity/Question';
import { QuestionsController } from './questions.controller';
import { StudentsModule } from '../students/students.module';
import { QuestionsService } from './questions.service';

@Module({
    imports: [TypeOrmModule.forFeature([Question]), forwardRef(() => StudentsModule)],
    controllers: [QuestionsController],
    providers: [QuestionsService],
    exports: [QuestionsService],
})
export class QuestionsModule {}