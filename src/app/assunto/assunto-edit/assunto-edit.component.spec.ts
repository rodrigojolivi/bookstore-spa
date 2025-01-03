import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoEditComponent } from './assunto-edit.component';

describe('AssuntoEditComponent', () => {
  let component: AssuntoEditComponent;
  let fixture: ComponentFixture<AssuntoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuntoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
