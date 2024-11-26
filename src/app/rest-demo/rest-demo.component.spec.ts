import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDemoComponent } from './rest-demo.component';

describe('RestDemoComponent', () => {
  let component: RestDemoComponent;
  let fixture: ComponentFixture<RestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
