import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  it('Object testing : values', () => {
    const data = {
      name: 'test',
    };
    expect(data).toEqual({ name: 'test' });
  });

  it('truthiness: null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('compile android goes as expected', () => {
    expect(() => component.compileAndroidCode()).toThrow(
      'Method not implemented.'
    );
  });
});
