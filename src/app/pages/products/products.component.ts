import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        this.data = response;
        console.log(response);
      });
  }
}
