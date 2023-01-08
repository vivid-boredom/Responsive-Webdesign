import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stamp-cards',
  templateUrl: './stamp-cards.component.html',
  styleUrls: ['./stamp-cards.component.scss'],
})
export class StampCardsComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<string>();
  @Output() showWarning = new EventEmitter<void>();

  public activeCard = 'your-stampcards';

  constructor() {}

  ngOnInit(): void {}
}
