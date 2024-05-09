import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosDetallesComponent } from './autos-detalles.component';

describe('AutosDetallesComponent', () => {
  let component: AutosDetallesComponent;
  let fixture: ComponentFixture<AutosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutosDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
