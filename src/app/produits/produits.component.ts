import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'

})
export class produitsComponent
{
  produits : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService ) 
  {
  this.produits = produitService.listeProduits();
  }

}
