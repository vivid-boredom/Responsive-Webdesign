import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-scroll-view',
  templateUrl: './scroll-view.component.html',
  styleUrls: ['./scroll-view.component.scss'],
})
export class ScrollViewComponent implements OnInit {
  @ViewChild('presentation') presentation?: ElementRef;

  public mediaArr: string[] = ['TODO1', 'TODO2', 'TODO3'];

  public index: number = 0;

  public translateVal: string = '';
  public isTranslating = false;

  constructor() {}

  ngOnInit(): void {}

  public slide(next: boolean): void {
    if (!this.isTranslating) {
      if (!next && this.index > 0) {
        this.index--;
      } else if (next && this.index < 2) {
        this.index++;
      }

      this.setTranslate();
      this.isTranslating = true;

      timer(600).subscribe(() => {
        this.isTranslating = false;
      });
    }
  }

  public navigate(index: number): void {
    if (!this.isTranslating) {
      this.index = index;

      this.setTranslate();
      this.isTranslating = true;

      timer(600).subscribe(() => {
        this.isTranslating = false;
      });
    }
  }

  public setTranslate(): void {
    if (this.presentation) {
      const width =
        this.presentation.nativeElement.getBoundingClientRect().width *
        this.index;

      this.translateVal = `translate3d(-${width}px, 0px, 0px)`;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.presentation) {
      this.isTranslating = false;
      this.setTranslate();
    }
  }
}
