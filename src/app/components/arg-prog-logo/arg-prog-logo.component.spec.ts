import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgProgLogoComponent } from './arg-prog-logo.component';

describe('ArgProgLogoComponent', () => {
  let component: ArgProgLogoComponent;
  let fixture: ComponentFixture<ArgProgLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgProgLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgProgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
