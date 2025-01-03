import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntoViewComponent } from './assunto-view.component';

describe('AssuntoViewComponent', () => {
  let component: AssuntoViewComponent;
  let fixture: ComponentFixture<AssuntoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssuntoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssuntoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
