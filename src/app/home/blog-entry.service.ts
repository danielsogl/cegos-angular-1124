import { Injectable } from '@angular/core';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root',
})
export class BlogEntryService {
  private readonly dummyEntries: Entry[] = [
    {
      id: 1,
      title: "Angular 18: What's New?",
      text: 'Discover the exciting new features and improvements in Angular 18, from performance enhancements to new language features.',
      image:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*ksoE0XtzILzsGA7nvXQsVA.png',
    },
    {
      id: 2,
      title: 'Building Scalable Angular Applications',
      text: 'Learn best practices for creating large-scale Angular applications that are maintainable and performant.',
      image:
        'https://cdn.bulldogjob.com/system/readables/covers/000/000/315/max_res/130524_Scalable_Angular_Application_Architecture.png',
    },
    {
      id: 3,
      title: 'Angular vs. React: A Comparison',
      text: 'Compare and contrast Angular and React, two popular JavaScript frameworks, to determine which one is best suited for your project.',
      image:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*ybY4O0j0Lm5KB7VG2lL92w.png',
    },
  ];
  private entries: Entry[] = [];

  addEntry(entry: Entry): void {
    const id = this.entries.length + 1;
    this.entries.push({ ...entry, id });
  }

  getAllEntries(): Entry[] {
    // return a copy of the array to prevent modification from outside
    return [...this.entries];
  }

  getEntryById(id: number): Entry | undefined {
    return this.entries.find((entry) => entry.id === id);
  }

  loadDummyDate() {
    this.entries = [...this.dummyEntries];
  }
}
