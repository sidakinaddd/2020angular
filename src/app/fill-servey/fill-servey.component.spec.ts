import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillServeyComponent } from './fill-servey.component';

describe('FillServeyComponent', () => {
  let component: FillServeyComponent;
  let fixture: ComponentFixture<FillServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillServeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
