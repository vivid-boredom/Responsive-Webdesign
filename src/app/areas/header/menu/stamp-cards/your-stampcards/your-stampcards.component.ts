import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-your-stampcards',
  templateUrl: './your-stampcards.component.html',
  styleUrls: ['./your-stampcards.component.scss'],
})
export class YourStampcardsComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
