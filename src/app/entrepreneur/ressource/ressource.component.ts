import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjetService } from 'src/app/service/projet.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit{

  ressource:any[]=[];
  constructor(private route:Router, private ressourceService:ProjetService ){}
  ngOnInit() {
    console.log('ressource oub tabbleau vide', this.ressource)
    this.afficherRessource()
    console.log('ressource oub tabbleau vide')
  }

  afficherRessource(){
    this.ressourceService.getRessource().subscribe((reponse:any)=>{
      this.ressource=reponse
    console.log(this.ressource)
  }
    )
  }

  navAcueil() {
    this.route.navigate(['/accueilUser'])
  }
  navAccueilEntrepreneur() {
    this.route.navigate(['/accueilEntrepreneur'])
  }
  navforum() {
    this.route.navigate(['/forum'])
  }
  navEperience() {
    this.route.navigate(['/experience'])
  }
}
