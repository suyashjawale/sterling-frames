import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private route: ActivatedRoute) { }
  
  selected_category:string = this.route.snapshot.data['categoryName'];
}
