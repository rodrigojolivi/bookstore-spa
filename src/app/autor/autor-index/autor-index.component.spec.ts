import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorIndexComponent } from './autor-index.component';

describe('AutorIndexComponent', () => {
  let component: AutorIndexComponent;
  let fixture: ComponentFixture<AutorIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
