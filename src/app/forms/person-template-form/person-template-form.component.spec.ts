import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTemplateFormComponent } from './person-template-form.component';

describe('PersonTemplateFormComponent', () => {
  let component: PersonTemplateFormComponent;
  let fixture: ComponentFixture<PersonTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
