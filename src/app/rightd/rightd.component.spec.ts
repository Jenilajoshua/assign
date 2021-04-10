import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightdComponent } from './rightd.component';

describe('RightdComponent', () => {
  let component: RightdComponent;
  let fixture: ComponentFixture<RightdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
