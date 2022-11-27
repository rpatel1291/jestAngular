import { of, throwError } from 'rxjs';
import { FakeService } from './fake.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('FakeService', () => {
  let service: FakeService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn(),
    };
    service = new FakeService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataV1', () => {
    const res = 'testResp';
    const url = 'https://josnplaceholder.typicode.com/todo/1';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV1();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getDataV2', (done) => {
    const res = 'testResp';
    const url = 'https://josnplaceholder.typicode.com/todo/1';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getDataV2().subscribe({
      next: (data) => {
        expect(data).toEqual(res);
        done();
      },
      error: (error) => console.log(error),
    });
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test getDataV2 with error', (done) => {
    const errorRes = new HttpErrorResponse({
      error: 'test 404',
      status: 404,
      statusText: 'not found',
    });
    const url = 'https://josnplaceholder.typicode.com/todo/1';

    jest
      .spyOn(httpClientSpy, 'get')
      .mockReturnValue(throwError(() => errorRes));
    service.getDataV2().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        expect(error.message).toContain('test 404');
        done();
      },
    });
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  });

  it('should test postDataV1', () => {
    const command = 'testing';
    const res = 'test res';
    const url = 'https://josnplaceholder.typicode.com/todo/1';
    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postDataV1(command);
    expect(httpClientSpy.post).toBeCalledTimes(1);
  });
});
