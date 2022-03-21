import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DecodeDto {
  @IsNotEmpty({
    message: 'Informe a URL encurtada',
  })
  @IsString()
  @ApiProperty()
  short_url: string;
}
