import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent {
  counter(i: number) {
    return new Array(i);
  }

  @Input() lg_columns : number = 4;
  @Input() md_columns : number = 4;
}
