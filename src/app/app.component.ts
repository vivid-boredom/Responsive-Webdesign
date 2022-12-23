import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public warning = false;
  public timer: number = 2500;

  public countDown(): void {
    timer(100).subscribe(() => {
      this.timer -= 100;

      if (this.timer) {
        this.countDown();
      } else {
        this.warning = false;
        this.timer = 2500;
      }
    });
  }

  public triggerWarning(): void {
    if (this.timer === 2500) {
      this.warning = true;
      this.countDown();
    } else {
      this.timer = 2500;
    }
  }
}
