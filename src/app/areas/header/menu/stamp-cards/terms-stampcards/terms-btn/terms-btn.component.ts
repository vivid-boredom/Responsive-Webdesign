import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-btn',
  templateUrl: './terms-btn.component.html',
  styleUrls: ['./terms-btn.component.scss'],
})
export class TermsBtnComponent implements OnInit {
  @Input() title?: string;

  public open = false;

  constructor() {}

  ngOnInit(): void {}
}
