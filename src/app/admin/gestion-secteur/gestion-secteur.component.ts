import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SecteurService } from 'src/app/service/secteur.service';

@Component({
  selector: 'app-gestion-secteur',
  templateUrl: './gestion-secteur.component.html',
  styleUrls: ['./gestion-secteur.component.css']
})
export class GestionSecteurComponent implements OnInit {

  nomSecteur:string='';


  Secteur:any[]=[];
  SecteurChoisi: any;
  showMessage: any;


  constructor(private route:Router, private SecteurService:SecteurService ){}
  ngOnInit(){
    console.log('nomSecteur', this.nomSecteur)
    console.log('Secteur ou tabbleau vide', this.Secteur)
    this.afficherSecteur()
    console.log('SecteurService ou tabbleau vide', this.Secteur)
  }

  afficherSecteur(){
    this.SecteurService.getSecteur().subscribe((reponse:any)=>{
      if (reponse.token){
        this.showMessage("success","Felicitations" ," Secteur crée avec success");
      }
    console.log(this.Secteur)
  })
  }

  // ajouter Secteur
  ajouterSecteur(){
    const Secteur={
      titre:this.nomSecteur,
    }
    this.SecteurService.postSecteur(Secteur).subscribe((data:any)=>{
      console.log(this.nomSecteur)
    window.location.reload();
        
    })

}
}
