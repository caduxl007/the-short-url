import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DecodeDto } from './dtos/decode-dto';
import { EncodeDto } from './dtos/encode-dto';
import { UrlsService } from './urls.service';

@Controller('urls')
@ApiTags('urls')
export class UrlsController {
  constructor(private readonly urlService: UrlsService) {}

  @Post('/encode')
  @ApiOperation({ summary: 'Retorna uma URL encurtada' })
  @ApiResponse({
    status: 201,
    description: 'URL encurtada retornada com sucesso',
    type: DecodeDto,
  })
  create(@Body() encodeDto: EncodeDto): Promise<{
    short_url: string;
  }> {
    return this.urlService.encode(encodeDto);
  }

  @Post('/decode')
  @ApiOperation({ summary: 'Retorna a URL original que foi encurtada' })
  @ApiResponse({
    status: 201,
    description: 'URL original retornada com sucesso',
    type: EncodeDto,
  })
  @Post('/decode')
  show(@Body() decodeDto: DecodeDto): Promise<{
    origin_url: string;
  }> {
    return this.urlService.decode(decodeDto);
  }
}
