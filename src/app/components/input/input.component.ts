import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() control: FormControl = new FormControl<string>('');
  @Input() type?: string;
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() error?: string;

  public showError = false;

  private destroy = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    this.control.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this.control.dirty && this.control.invalid) {
        this.showError = true;
      } else {
        this.showError = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
