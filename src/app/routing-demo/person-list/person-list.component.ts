import { Component, inject, OnInit } from '@angular/core';
import { PersonDataService } from '../person-data.service';
import { Person } from '../person';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-list',
  imports: [RouterLink],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css',
})
export class PersonListComponent implements OnInit {
  private readonly personService = inject(PersonDataService);

  public persons: Person[] = [];

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
  }
}
