import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  public components: string[] = [
    'list',
    'sign-in',
    'create-account',
    'orders',
    'favourites',
    'stamp-cards',
  ];

  public activeComponent: string = this.components[0];

  constructor() {}

  ngOnInit(): void {}

  public warning(): void {
    this.showWarning.emit();
  }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }
}
