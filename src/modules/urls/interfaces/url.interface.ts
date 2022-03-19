import { DecodeDto } from '../dtos/decode-dto';
import { EncodeDto } from '../dtos/encode-dto';

export interface IUrlService {
  encode(encodeDto: EncodeDto): Promise<{
    short_url: string;
  }>;

  decode(decodeDto: DecodeDto): Promise<{
    origin_url: string;
  }>;
}
