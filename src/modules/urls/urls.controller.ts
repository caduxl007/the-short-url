import { Body, Controller, Post } from '@nestjs/common';
import { DecodeDto } from './dtos/decode-dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @Post('/decode')
  decode(@Body() decodeDto: DecodeDto): Promise<{
    origin_url: string;
  }> {
    return this.urlService.decode(decodeDto);
  }
}
