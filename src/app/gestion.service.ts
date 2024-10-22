import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  constructor(private http:HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:8080/rest/categories');
  }
  getProduits(id:number) {
    return this.http.get('http://localhost:8080/rest/produits/'+id);
  }
  addProduit(prd:any) {
    return this.http.post('http://localhost:8080/rest/addProduit',prd);
  }
  deleteProduit(id:number){
    return this.http.delete('http://localhost:8080/rest/deleteProduit/'+id);
  }
}
