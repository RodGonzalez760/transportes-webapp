import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaTransporteFormComponent } from './linea-transporte-form.component';

describe('LineaTransporteFormComponent', () => {
  let component: LineaTransporteFormComponent;
  let fixture: ComponentFixture<LineaTransporteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaTransporteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaTransporteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
