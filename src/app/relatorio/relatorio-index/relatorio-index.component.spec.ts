import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioIndexComponent } from './relatorio-index.component';

describe('RelatorioIndexComponent', () => {
  let component: RelatorioIndexComponent;
  let fixture: ComponentFixture<RelatorioIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
