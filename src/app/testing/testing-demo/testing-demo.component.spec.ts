import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';
import { TestingDataService } from '../testing-data.service';
import { TestingDemoComponent } from './testing-demo.component';
import { Component } from '@angular/core';
import { MockComponent, MockProvider } from 'ng-mocks';
import { AboutComponent } from '../../routing-demo/about/about.component';

class MockDataService {
  getPosts(): Observable<unknown[]> {
    return of([]);
  }
}

@Component({
  selector: 'app-about',
  template: '',
})
class AboutMockComponent {}

fdescribe('TestingDemoComponent', () => {
  let component: TestingDemoComponent;
  let fixture: ComponentFixture<TestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestingDemoComponent],
      providers: [
        // { provide: TestingDataService, useClass: MockDataService }
        MockProvider(TestingDataService, {
          getPosts() {
            return of([]);
          },
        }),
      ],
    })
      .overrideComponent(TestingDemoComponent, {
        remove: {
          imports: [AboutComponent],
        },
        add: {
          imports: [MockComponent(AboutComponent)],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('counter', () => {
    it('should increment', () => {
      component.increment();
      expect(component.getCounter()).toBe(1);
    });
  });

  describe('loadData', () => {
    it('should load products', () => {
      // Arrange
      const testingService = TestBed.inject(TestingDataService);
      spyOn(testingService, 'getPosts').and.returnValue(of([3, 2, 1]));

      // Act
      component.loadData();

      // Assert
      expect(component.posts).toEqual([3, 2, 1]);
      expect(testingService.getPosts).toHaveBeenCalledTimes(1);
    });
  });
});
