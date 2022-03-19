import { IsNotEmpty, IsString } from 'class-validator';

export class EncodeDto {
  @IsNotEmpty({
    message: 'Informe a URL de origem',
  })
  @IsString()
  origin_url: string;
}
