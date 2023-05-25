import { Component } from '@angular/core';

@Component({
  selector: 'app-flexbox-product',
  templateUrl: './flexbox-product.component.html',
  styleUrls: ['./flexbox-product.component.css']
})
export class FlexboxProductComponent {
	counter(i: number) {
		return new Array(i);
	}
}
