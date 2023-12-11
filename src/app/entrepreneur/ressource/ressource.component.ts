import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RessourceService } from 'src/app/service/ressource.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit{

  image:string='';
  titre:string='';
  description:string='';
  lien:string='';

  ressource:any[]=[];
  ressourceChoisi: any;
  constructor(private route:Router, private ressourceService:RessourceService ){}
  ngOnInit() {
    console.log('titre', this.titre)
    console.log('ressource ou tabbleau vide', this.ressource)
    this.afficherRessource()
    console.log('ressource ou tabbleau vide', this.ressource)
    
  }

  afficherRessource(){
    this.ressourceService.getRessource().subscribe((reponse:any)=>{
      this.ressource=reponse
    console.log(this.ressource)
  })
  }

  // ajouter ressource
  ajoutRessource(){
    const ressource={
      titre:this.titre,
      lien: this.lien,
      // image:this.image,
      description:this.description 
    }
    this.ressourceService.postRessource(ressource).subscribe((data:any)=>{
      console.log(this.titre)
    window.location.reload();
        
    })
  }
  modif(){
    
    let ressource={
       titre:this.titre,
       lien:this.lien,
       image:this.image,
       description:this.description
     }
     this.ressourceService.modifierRessource(this.ressourceChoisi.idRessource, ressource) .subscribe((reponse:any)=>{
       console.log(`modification reussi : ${reponse}`);
       window.location.reload()
     }) 
   }
 
   suppression(id: any) {
     this.ressourceService.deleteRessource(id).subscribe(
       (reponse:any) => {
         console.log(`Suppression de ${reponse.prix} reussie !`);
       })
     window.location.reload();
   }



// navigation
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
