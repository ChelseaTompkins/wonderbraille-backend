import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { StudentsService } from '../students/students.service';
import { Student } from '../entity/Student';

@Injectable()
export class AuthService {
  constructor(private readonly studentsService: StudentsService) { }

  async createToken(student: any) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const token = jwt.sign(student, secretOrKey, {});
    return { expires_in: expiresIn, token };
  }

  async verifyToken(req, res, next){
    const token = req.headers.token;

    if (token){
      jwt.verify(token, 'secret', (err, decoded) => {
        if (err){
          res.json({ message: 'Failed to authenticate' });
        }
        req.decoded = decoded;
        next();
      });
    }else{
      res.json({ message: 'Failed to authenticate' });
    }
  }

  async validateUser(signedStudent): Promise<boolean> {
    if (signedStudent && signedStudent.studentEmail) {
      return Boolean(this.studentsService.getStudentByStudentEmail(signedStudent.stuentEmail));
    }
    return false;
  }
}