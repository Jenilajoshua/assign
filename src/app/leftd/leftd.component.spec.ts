import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftdComponent } from './leftd.component';

describe('LeftdComponent', () => {
  let component: LeftdComponent;
  let fixture: ComponentFixture<LeftdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
