import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTransporteComponent } from './linea-transporte.component';

describe('LineaTransporteComponent', () => {
  let component: LineaTransporteComponent;
  let fixture: ComponentFixture<LineaTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
