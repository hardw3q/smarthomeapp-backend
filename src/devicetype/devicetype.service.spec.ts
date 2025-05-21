import { Test, TestingModule } from '@nestjs/testing';
import { DeviceTypeService } from './devicetype.service';

describe('DevicetypeService', () => {
  let service: DeviceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceTypeService],
    }).compile();

    service = module.get<DeviceTypeService>(DeviceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
