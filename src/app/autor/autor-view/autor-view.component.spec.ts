import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorViewComponent } from './autor-view.component';

describe('AutorViewComponent', () => {
  let component: AutorViewComponent;
  let fixture: ComponentFixture<AutorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
