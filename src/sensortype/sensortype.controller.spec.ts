import { Test, TestingModule } from '@nestjs/testing';
import { SensorTypeController } from './sensortype.controller';
import { SensorTypeService } from './sensortype.service';

describe('SensortypeController', () => {
  let controller: SensorTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensorTypeController],
      providers: [SensorTypeService],
    }).compile();

    controller = module.get<SensorTypeController>(SensorTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
