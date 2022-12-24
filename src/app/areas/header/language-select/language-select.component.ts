import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  public warning(): void {
    this.showWarning.emit();
  }
}
