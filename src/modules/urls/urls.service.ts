import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DecodeDto } from './dtos/decode-dto';
import { EncodeDto } from './dtos/encode-dto';
import { UrlEntity } from './entities/url.entity';
import { IUrlService } from './interfaces/url.interface';

@Injectable()
export class UrlsService implements IUrlService {
  constructor(
    @InjectRepository(UrlEntity)
    private readonly urlRepository: Repository<UrlEntity>,
  ) {}

  async encode(encodeDto: EncodeDto): Promise<{ short_url: string }> {
    const { origin_url } = encodeDto;

    return {
      short_url: origin_url,
    };
  }

  async decode(decodeDto: DecodeDto): Promise<{ origin_url: string }> {
    const { short_url } = decodeDto;

    const findShotUrl = await this.urlRepository.findOne({
      where: {
        short_url,
      },
    });

    if (!findShotUrl) {
      throw new NotFoundException('URl não encontrada');
    }

    return {
      origin_url: findShotUrl.origin_url,
    };
  }
}
