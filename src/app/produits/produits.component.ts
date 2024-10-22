import { Component } from '@angular/core';
import { GestionService } from '../gestion.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {

    pdts:any=[];
    constructor(private gest:GestionService ,  private act:ActivatedRoute , private route:Router) {
    let id=this.act.snapshot.params["id"] ;
      this.getProduits(id);
   }

   getProduits(id:number){
    this.gest.getProduits(id).subscribe(
      {
      "next" : data =>{this.pdts=data;},
      "error": err=> {},
      "complete": ()=> {}
      }
    
  )
   }

   delete(id:number){
    this.gest.deleteProduit(id).subscribe(
      {
        "next" : data =>{
          this.route.navigateByUrl("/")
        },
        "error": err=> {},
        "complete": ()=> {}
        }
      )
   }



}
