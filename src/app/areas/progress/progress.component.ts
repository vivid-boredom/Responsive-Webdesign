import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public warning(): void {
    this.showWarning.emit();
  }
}
