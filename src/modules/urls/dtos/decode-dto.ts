import { IsNotEmpty, IsString } from 'class-validator';

export class DecodeDto {
  @IsNotEmpty({
    message: 'Informe a URL encurtada',
  })
  @IsString()
  short_url: string;
}
