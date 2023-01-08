import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orders-favourites',
  templateUrl: './orders-favourites.component.html',
  styleUrls: ['./orders-favourites.component.scss'],
})
export class OrdersFavouritesComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<void>();
  @Output() showWarning = new EventEmitter<void>();

  @Input() activeComponent?: string;

  public headline: string = 'Orders';
  public subHeadline: string = 'No orders yet';
  public text: string = 'You have no order history available.';

  constructor() {}

  ngOnInit(): void {
    if (this.activeComponent && this.activeComponent === 'favourites') {
      this.headline = 'Favourites';
      this.subHeadline = 'No favourite restaurants';
      this.text = "You currently don't have any favorite restaurants.";
    }
  }

  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }
}
