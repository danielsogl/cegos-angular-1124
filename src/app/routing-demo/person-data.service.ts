// person-data.service.ts
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class PersonDataService {
  protected persons: Person[] = [
    { name: 'Max', socialID: 123 },
    { name: 'Anna', socialID: 234 },
    { name: ' Uwe', socialID: 345 },
    { name: ' Lars', socialID: 456 },
  ];

  getPersons(): Person[] {
    return this.persons;
  }

  getPersonById(id: number): Person | undefined {
    return this.persons.find((p) => p.socialID == id);
  }
}
