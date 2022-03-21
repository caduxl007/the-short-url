import {
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { generateCodeUrl } from 'src/utils/generateCodeUrl';
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

    private configService: ConfigService,
  ) {}

  async encode(encodeDto: EncodeDto): Promise<{ short_url: string }> {
    const { origin_url } = encodeDto;

    const domain = this.configService.get<string>('DOMAIN');
    const code = generateCodeUrl();

    const short_url = domain + code;

    const url = this.urlRepository.create({
      origin_url,
      short_url,
    });

    try {
      await this.urlRepository.save(url);
    } catch (err) {
      throw new InternalServerErrorException(
        'Houve uma falha ao gerar a URL encurtada',
      );
    }

    return {
      short_url,
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
