import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  cats:any=[]
  constructor( private gest:GestionService){
    this.getCats();

  }
  getCats(){
    this.gest.getCategories().subscribe(
      {
      "next": data => {this.cats=data},
      "error": err => { },
      "complete": () => {} 
  }
)
}

}
