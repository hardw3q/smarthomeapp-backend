import { PartialType } from '@nestjs/swagger';
import { CreateDeviceTypeDto } from './create-devicetype.dto';

export class UpdateDeviceTypeDto extends PartialType(CreateDeviceTypeDto) {}
