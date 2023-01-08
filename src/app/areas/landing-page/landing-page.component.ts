import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public warning(): void {
    this.showWarning.emit();
  }
}
