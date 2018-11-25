import { Test, TestingModule } from '@nestjs/testing';
import { InstructorsController } from './instructors.controller';

describe('Instructors Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [InstructorsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: InstructorsController = module.get<InstructorsController>(InstructorsController);
    expect(controller).toBeDefined();
  });
});
