import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-facebook-btn',
  templateUrl: './facebook-btn.component.html',
  styleUrls: ['./facebook-btn.component.scss'],
})
export class FacebookBtnComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
