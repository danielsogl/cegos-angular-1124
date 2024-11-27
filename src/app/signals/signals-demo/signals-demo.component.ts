import {
  Component,
  computed,
  effect,
  inject,
  input,
  Input,
  OnChanges,
  OnInit,
  output,
  signal,
  SimpleChanges,
  untracked,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product';
import { ProductsDataService } from '../../products-data.service';

@Component({
  selector: 'app-signals-demo',
  imports: [FormsModule],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.css',
})
export class SignalsDemoComponent implements OnInit, OnChanges {
  @Input({ required: true }) public title!: string;

  // input and output signals
  readonly titleSignal = input.required<string>();
  readonly nameChanged = output<void>();

  // writeable signals
  public readonly name = signal('Daniel');
  public readonly surname = signal('Smith');

  // readonly signal
  public readonly fullName = computed(() => {
    return `${this.name()} ${untracked(() =>
      this.surname()
    )} ${this.titleSignal()}`;
  });

  public readonly interval = signal(0);

  public readonly intervalLog = effect(() => {
    console.log(this.interval());
  });

  // side effect (must run in injection context)
  public readonly fullNameLog = effect(() => {
    console.log(this.fullName());
  });

  private readonly productsData = inject(ProductsDataService);
  public readonly searchTerm = signal('');
  public readonly products = signal<Product[]>([]);
  public readonly triggerSearch = effect(() => this.search());

  search() {
    this.productsData
      .searchProducts({
        searchString: this.searchTerm(),
        limit: 10,
      })
      .subscribe(({ products }) => this.products.set(products));
  }

  ngOnInit(): void {
    // glitch free = console will print out "5"
    this.interval.set(1);
    this.interval.set(2);
    this.interval.set(3);
    this.interval.set(4);
    this.interval.set(5);

    // event will print out the number five times
    const subject = new BehaviorSubject(0);
    subject.subscribe((value) => console.log(value));
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.next(5);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      console.log('title changed');
    }
  }

  changeName() {
    this.name.set('John');
    this.nameChanged.emit();
  }
}
