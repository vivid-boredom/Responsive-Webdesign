import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  @Output() changeComponent = new EventEmitter<void>();
  @Output() showWarning = new EventEmitter<void>();

  public control = new FormControl<string>('', [Validators.required]);

  constructor() {}

  ngOnInit(): void {}
}
