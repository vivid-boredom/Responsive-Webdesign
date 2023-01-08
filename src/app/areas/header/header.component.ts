import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() showWarning = new EventEmitter<void>();
  @Output() blockPage = new EventEmitter<boolean>();

  public showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public triggerMenu(): void {
    this.showMenu = !this.showMenu;
    this.blockPage.emit(this.showMenu);
  }

  public warning(): void {
    this.showWarning.emit();
  }
}
