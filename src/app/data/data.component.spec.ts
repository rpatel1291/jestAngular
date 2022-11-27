import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { FakeService } from '../services/fake.service';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataV1: jest.fn(),
    };
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [
        {
          provide: FakeService,
          useValue: fakeServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    const expectRes = {
      name: '',
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectRes));

    fixture.detectChanges();
    expect(component.serviceData.name).toBe(expectRes.name);
  });

  it('should get ServiceData set errorMessage', () => {
    const errorRes = new HttpErrorResponse({
      error: 'test 404',
      status: 404,
      statusText: 'Not Found',
    });
    jest
      .spyOn(fakeServiceMock, 'getDataV1')
      .mockReturnValue(throwError(() => errorRes));
    component.getServiceData();
    expect(component.errorMessage).toBe('Not Found');
  });

  it('should getServiceData set meeting to good day', () => {
    const expectRes = {
      name: '',
      time: 12,
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectRes));

    fixture.detectChanges();
    expect(component.greeting).toBe('good day');
  });

  it('should getServiceData set meeting to good evening', () => {
    const expectRes = {
      name: '',
      time: 22,
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectRes));

    fixture.detectChanges();
    expect(component.greeting).toBe('good evening');
  });

  it('should getServiceData set meeting to good morning', () => {
    const expectRes = {
      name: '',
      time: 2,
    };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectRes));

    fixture.detectChanges();
    expect(component.greeting).toBe('good morning');
  });
});
