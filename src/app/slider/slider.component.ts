import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { timer } from 'rxjs';
export interface Media {
  media: string;
  title: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('section') section?: ElementRef;

  public mediaArr: Media[] = [
    { media: 'chef', title: 'TODO' },
    { media: 'spices', title: 'TODO' },
    { media: 'bread', title: 'TODO' },
    { media: 'burger', title: 'TODO' },
    { media: 'chicken', title: 'TODO' },
    { media: 'drink', title: 'TODO' },
    { media: 'fish', title: 'TODO' },
    { media: 'pasta', title: 'TODO' },
    { media: 'plate', title: 'TODO' },
    { media: 'potato', title: 'TODO' },
  ];

  public index: number = 1;
  public length: number = this.mediaArr.length;

  public translateVal: string = '';
  public isTranslating = false;

  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.mediaArr.push(this.mediaArr[0]);

    this.setTranslate();
    this.cd.detectChanges();
  }

  public slide(next: boolean): void {
    if (!this.isTranslating) {
      if (next) {
        this.index++;
      } else {
        this.index--;
      }

      this.setTranslate();
      this.isTranslating = true;

      timer(1500).subscribe(() => {
        this.isTranslating = false;

        if (this.index === this.length && !next) {
          this.index = 0;
        } else if (this.index === 0) {
          this.mediaArr.push(this.mediaArr[1]);
          this.index = this.length;
        } else if (
          this.mediaArr.length > this.length + 1 &&
          this.index === this.length + 1 &&
          next
        ) {
          this.index = 1;
        }

        this.setTranslate();
      });
    }
  }

  public setTranslate(): void {
    if (this.section) {
      const width =
        this.section.nativeElement.getBoundingClientRect().width * this.index;

      this.translateVal = `translate3d(-${width}px, 0px, 0px)`;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.section) {
      this.isTranslating = false;
      this.setTranslate();
    }
  }
}
