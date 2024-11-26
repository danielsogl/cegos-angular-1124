// data.service.ts
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected names: string[] = ['Max', 'Anna', 'Uwe', 'Lars'];
  protected persons: Person[] = [
    { name: 'Max', socialID: 123 },
    { name: 'Anna', socialID: 234 },
    { name: ' Uwe', socialID: 345 },
    { name: ' Lars', socialID: 456 },
  ];
  constructor() {}
  getAllNames(): string[] {
    return this.names;
  }

  getPersons(): Person[] {
    return this.persons;
  }

  getPersonById(id: number): Person | undefined {
    return this.persons.find((p) => p.socialID === id);
  }

  getPersonsWithIDSubstring(idpart: number): Person[] | undefined {
    this.persons.some;
    return this.persons.filter((p) =>
      String(p.socialID).includes(String(idpart))
    );
  }
}
