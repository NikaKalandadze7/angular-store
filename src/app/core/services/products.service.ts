import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  private readonly URL: string = 'https://fakestoreapi.in/api';

  getProducts(): Observable<any> {
    return this.http.get(`${this.URL}/products`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.URL}/products/category`);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.URL}/products/category?type=${category}`);
  }
  getSpecificProduct(id: string): Observable<any> {
    return this.http.get(`${this.URL}/products/${id}`);
  }
}
