import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoCreateComponent } from './assunto-create.component';

describe('AssuntoCreateComponent', () => {
  let component: AssuntoCreateComponent;
  let fixture: ComponentFixture<AssuntoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuntoCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
