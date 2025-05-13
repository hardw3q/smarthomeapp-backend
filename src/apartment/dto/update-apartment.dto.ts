import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateApartmentDto } from './create-apartment.dto';

export class UpdateApartmentDto extends PartialType(
    OmitType(CreateApartmentDto, ['rooms'] as const)
) {}