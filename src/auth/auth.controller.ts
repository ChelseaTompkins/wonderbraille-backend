
import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StudentsService } from '../students/students.service';
import { Student } from '../entity/student';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly studentsService: StudentsService) {}

  @Post('login')
  async loginUser(@Response() res: any, @Body() body: Student) {
    if (!(body && body.studentEmail && body.studentPassword)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    const student = await this.studentsService.getStudentByStudentEmail(body.studentEmail);

    if (student) {
      if (await this.studentsService.compareHash(body.studentPassword, body.passwordHash)) {
        return res.status(HttpStatus.OK).json(await this.authService.createToken(student.id, student.studentEmail));
      }
    }

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
  }

  @Post('register')
  async registerUser(@Response() res: any, @Body() body: Student) {
    if (!(body && body.studentName && body.studentEmail && body.studentPassword)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    let student = await this.studentsService.getStudentByStudentEmail(body.studentEmail);

    if (student) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username exists' });
    } else {
      student = await this.studentsService.create(body);
      if (student) {
        student.passwordHash = undefined;
      }
    }

    return res.status(HttpStatus.OK).json(student);
  }
}