import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';


const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path:"categories" , component:CategoriesComponent},
  {path:"produits/:id" , component:ProduitsComponent},
  {path:"addProduit" , component:AddProduitComponent},

  {path:"**" , redirectTo:"/categories" , pathMatch:"full"}

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
