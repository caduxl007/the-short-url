import { InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import '../../utils/generateCodeUrl';
import { UrlEntity } from './entities/url.entity';
import { UrlsService } from './urls.service';

const urlsEntityList: UrlEntity[] = [
  new UrlEntity({
    origin_url: 'http://localhost:3003',
    short_url: '41asd23',
  }),
  new UrlEntity({
    origin_url: 'http://localhost:3000',
    short_url: 'DS23FS',
  }),
];

describe('UrlsService', () => {
  let urlsService: UrlsService;
  let urlsRepository: Repository<UrlEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        ConfigService,
        {
          provide: getRepositoryToken(UrlEntity),
          useValue: {
            findOneOrFail: jest.fn().mockResolvedValue(urlsEntityList[0]),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    urlsService = module.get<UrlsService>(UrlsService);
    urlsRepository = module.get<Repository<UrlEntity>>(
      getRepositoryToken(UrlEntity),
    );
  });

  it('should be defined', () => {
    expect(urlsService).toBeDefined();
  });

  describe('encode', () => {
    it('should return a short_url', async () => {
      const result = await urlsService.encode({
        origin_url: 'www.google.com',
      });
      expect(result).toHaveProperty('short_url');
      expect(urlsRepository.create).toHaveBeenCalledTimes(1);
    });

    it('should throw an internal server error exception', async () => {
      jest.spyOn(urlsRepository, 'save').mockRejectedValueOnce(new Error());
      expect(
        urlsService.encode({
          origin_url: 'www.google.com',
        }),
      ).rejects.toThrowError(InternalServerErrorException);
    });
  });
});
