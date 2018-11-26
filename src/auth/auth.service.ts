import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';

@Injectable()
export class AuthService {
  constructor(private readonly studentsService: StudentsService) { }

  async createToken(id: number, studentName: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const student = { studentName };
    const token = jwt.sign(student, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedStudent): Promise<boolean> {
    if (signedStudent && signedStudent.studentName) {
      return Boolean(this.studentsService.getStudentByStudentName(signedStudent.stuentName));
    }
    return false;
  }
}