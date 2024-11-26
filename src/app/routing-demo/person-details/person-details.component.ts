import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Person } from '../../service-demo/person';
import { PersonDataService } from '../person-data.service';

@Component({
  selector: 'app-person-details',
  imports: [JsonPipe, RouterLink],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css',
})
export class PersonDetailsComponent implements OnInit {
  // private readonly activatedRoute = inject(ActivatedRoute);
  private readonly personService = inject(PersonDataService);

  // property name must match router url config
  @Input({ transform: numberAttribute }) id: number | undefined = undefined;

  public person: Person | undefined = undefined;

  ngOnInit(): void {
    console.log('PersonDetailsComponent.ngOnInit()');
    console.log(this.id);
    // const userId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.person = this.personService.getPersonById(this.id);
    }
  }
}
