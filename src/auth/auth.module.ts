import * as passport from 'passport';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controller';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [StudentsModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  constructor(private authService: AuthService){

  }

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(this.authService.verifyToken)
      .forRoutes(
        { path: '/api/instructors', method: RequestMethod.ALL },
        { path: '/api/questions', method: RequestMethod.ALL },
        { path: '/api/students', method: RequestMethod.ALL },
        { path: '/api/courses', method: RequestMethod.ALL });
  }
}

// export class AuthModule implements NestModule {
//   public configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(passport.authenticate('jwt', { session: false }))
//       .forRoutes(
//         { path: '/products', method: RequestMethod.ALL },
//         { path: '/products/*', method: RequestMethod.ALL });
//   }
// }