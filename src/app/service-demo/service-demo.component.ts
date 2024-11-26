// service-demo.component.ts
import { Component, inject, Input } from '@angular/core';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { Person } from './person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css',
})
export class ServiceDemoComponent {
  dataService: DataService = inject(DataService);
  namesList: string[] = [];
  personsList: Person[] = [];
  selectedPerson: Person | undefined;
  selectedID: number;
  filteredPersonsList: Person[] | undefined = [];

  constructor() {
    this.namesList = this.dataService.getAllNames();
    this.personsList = this.dataService.getPersons();
    this.selectedID = 0;
    this.selectedPerson = this.dataService.getPersonById(this.selectedID);
  }

  findPersonById() {
    this.selectedPerson = this.dataService.getPersonById(this.selectedID);
    this.filteredPersonsList = this.dataService.getPersonsWithIDSubstring(
      this.selectedID
    );
  }
}
