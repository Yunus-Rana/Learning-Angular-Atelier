import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-lifecycle',
  styleUrl: './lifecycle.css',
  templateUrl: './lifecycle.html',
})
export class Lifecycle implements OnInit {
  isInitialized = false;

  readonly lifecycleStages = [
    {
      name: 'Creation',
      description: 'Angular creates the component and prepares its inputs.',
      hooks: [
        { name: 'constructor', detail: 'Runs when the component instance is created.' },
        { name: 'ngOnChanges', detail: 'Runs when an input value changes.' },
        { name: 'ngOnInit', detail: 'Runs once after the first input values are set.' },
        { name: 'ngDoCheck', detail: 'Runs during change detection.' },
      ],
    },
    {
      name: 'Content',
      description: 'Angular initializes and checks projected content.',
      hooks: [
        { name: 'ngAfterContentInit', detail: 'Runs once after projected content is initialized.' },
        { name: 'ngAfterContentChecked', detail: 'Runs after projected content is checked.' },
      ],
    },
    {
      name: 'View',
      description: 'Angular initializes and checks the component view.',
      hooks: [
        { name: 'ngAfterViewInit', detail: 'Runs once after the component view is initialized.' },
        { name: 'ngAfterViewChecked', detail: 'Runs after the component view is checked.' },
      ],
    },
    {
      name: 'Destruction',
      description: 'Angular is about to remove the component.',
      hooks: [
        { name: 'ngOnDestroy', detail: 'Runs once before the component is destroyed.' },
      ],
    },
  ];

  ngOnInit(): void {
    this.isInitialized = true;
  }
}
