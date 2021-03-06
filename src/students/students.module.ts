import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from '../entity/Student';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { CoursesModule } from '../courses/courses.module';
import { QuestionsModule } from '../questions/questions.module';

@Module({
    imports: [TypeOrmModule.forFeature([Student]), CoursesModule, QuestionsModule],
    controllers: [StudentsController],
    providers: [StudentsService],
    exports: [StudentsService],
})
export class StudentsModule {}