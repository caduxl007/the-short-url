import { Body, Controller, Post } from '@nestjs/common';
import { DecodeDto } from './dtos/decode-dto';
import { EncodeDto } from './dtos/encode-dto';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @Post('/encode')
  create(@Body() encodeDto: EncodeDto): Promise<{
    short_url: string;
  }> {
    return this.urlService.encode(encodeDto);
  }

  @Post('/decode')
  show(@Body() decodeDto: DecodeDto): Promise<{
    origin_url: string;
  }> {
    return this.urlService.decode(decodeDto);
  }
}
