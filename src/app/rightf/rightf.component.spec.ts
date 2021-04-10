import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightfComponent } from './rightf.component';

describe('RightfComponent', () => {
  let component: RightfComponent;
  let fixture: ComponentFixture<RightfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
