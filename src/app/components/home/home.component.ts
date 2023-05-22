import { Component } from '@angular/core';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent {
	counter(i: number) {
		return new Array(i);
	}

	images: string[] = ['assets/ganesh.jpg', 'assets/hanuman.jpg', 'assets/lord-shiva.jpg'];
}
