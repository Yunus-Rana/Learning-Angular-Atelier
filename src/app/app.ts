import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ang');
  protected readonly isNavigationOpen = signal(false);

  protected toggleNavigation(): void {
    this.isNavigationOpen.update((isOpen) => !isOpen);
  }

  protected closeNavigation(): void {
    this.isNavigationOpen.set(false);
  }
}
