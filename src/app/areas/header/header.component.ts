import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();

  public showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public warning(): void {
    this.showWarning.emit();
  }
}
