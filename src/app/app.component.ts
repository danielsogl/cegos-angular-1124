import { NgClass, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blog-app';
  private readonly router = inject(Router);

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
    // alternative way to navigate
    // this.router.navigate([url]);
  }
}
