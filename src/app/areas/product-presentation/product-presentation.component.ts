import { Component, OnInit } from '@angular/core';

interface Sushi {
  type: string;
  paragraph: string;
  weight: number;
  calories: number;
  imageSrc: string;
}

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.scss'],
})
export class ProductPresentationComponent implements OnInit {
  public sushiArr: Sushi[] = [
    {
      type: 'PLATE',
      paragraph: 'TODO',
      weight: 1344,
      calories: 5432,
      imageSrc: './assets/media/product/sushi_plate.png',
    },
    {
      type: 'SINGLE',
      paragraph: 'TODO',
      weight: 48,
      calories: 198,
      imageSrc: './assets/media/product/sushi.png',
    },
  ];

  public activeSushi: Sushi = this.sushiArr[0];

  constructor() {}

  ngOnInit(): void {}

  public setSushi(index: number): void {
    this.activeSushi = this.sushiArr[index];
  }
}
