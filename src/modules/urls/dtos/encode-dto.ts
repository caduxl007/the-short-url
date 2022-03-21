import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EncodeDto {
  @IsNotEmpty({
    message: 'Informe a URL de origem',
  })
  @IsString()
  @ApiProperty()
  origin_url: string;
}
