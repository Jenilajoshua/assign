import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftfComponent } from './leftf.component';

describe('LeftfComponent', () => {
  let component: LeftfComponent;
  let fixture: ComponentFixture<LeftfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
