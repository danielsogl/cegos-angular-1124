import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactiveFormComponent } from './person-reactive-form.component';

describe('PersonReactiveFormComponent', () => {
  let component: PersonReactiveFormComponent;
  let fixture: ComponentFixture<PersonReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
