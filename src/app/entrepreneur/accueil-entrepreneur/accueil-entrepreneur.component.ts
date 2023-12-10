import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-accueil-entrepreneur',
  templateUrl: './accueil-entrepreneur.component.html',
  styleUrls: ['./accueil-entrepreneur.component.css']
})
export class AccueilEntrepreneurComponent implements OnInit{
  // declaration des variables de recuperation des valeurs saisies
  titre:string='';
  image:string='';
  description:string='';
  searchResult: any[] = [];

  pageActuelle: number = 1;
  articlesParPage: number = 3;


  constructor(private route:Router){}

  ngOnInit(){
  }
  ajoutProjet(){
    console.log(this.titre)
    console.log(this.image)
    console.log(this.description)
  
  }
 
  


  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getArticlesPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.searchResult.reverse().slice(indexDebut, indexFin);
  }
  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.searchResult.length / this.articlesParPage);
    return Array(totalPages).fill(0).map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.searchResult.length / this.articlesParPage);
  }
  
}
