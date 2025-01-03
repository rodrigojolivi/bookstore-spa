import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoIndexComponent } from './assunto-index.component';

describe('AssuntoIndexComponent', () => {
  let component: AssuntoIndexComponent;
  let fixture: ComponentFixture<AssuntoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuntoIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
