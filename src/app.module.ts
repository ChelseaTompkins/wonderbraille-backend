import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InstructorsModule} from './instructors/instructors.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { QuestionsModule } from './questions/questions.module';
import { AuthModule } from './auth/auth.module';
import { QuizzesController } from './quizzes/quizzes.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), InstructorsModule, CoursesModule, StudentsModule, QuestionsModule, AuthModule],
  controllers: [QuizzesController],
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
