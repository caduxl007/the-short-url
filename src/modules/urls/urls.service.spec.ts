import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UrlEntity } from './entities/url.entity';
import { UrlsService } from './urls.service';

const urlsEntityList: UrlEntity[] = [
  new UrlEntity({
    origin_url: 'http://localhost:3003',
    code: '41asd23',
  }),
  new UrlEntity({
    origin_url: 'http://localhost:3000',
    code: 'DS23FS',
  }),
];

describe('UrlsService', () => {
  let urlsService: UrlsService;
  let urlsRepository: Repository<UrlEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UrlsService,
        {
          provide: getRepositoryToken(UrlEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(urlsEntityList[0]),
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

  // describe('decode', () => {
  //   it('should return a origin url', async () => {
  //     const result = await urlsService.decode({
  //       short_url: urlsEntityList[0].short_url,
  //     });

  //     console.log(result);

  //     // expect(result.origin_url).toEqual(urlsEntityList[0].origin_url);
  //     expect(urlsRepository.find).toHaveBeenCalledTimes(1);
  //   });

  //   it('should trow a not found expection', async () => {
  //     expect(
  //       urlsService.decode({
  //         short_url: '123',
  //       }),
  //     ).rejects.toThrowError(NotFoundException);
  //   });
  // });
});
