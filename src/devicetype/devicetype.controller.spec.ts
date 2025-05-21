import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTypeController } from './devicetype.controller';
import { DeviceTypeService } from './devicetype.service';

describe('DevicetypeController', () => {
  let controller: DeviceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeviceTypeController],
      providers: [DeviceTypeService],
    }).compile();

    controller = module.get<DeviceTypeController>(DeviceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
