import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit{

  constructor(private route:Router){}
  ngOnInit() {
   
  }

  navAcueil() {
    this.route.navigate(['/accueilUser'])
  }
  navAccueilEntrepreneur() {
    this.route.navigate(['/accueilEntrepreneur'])
  }
}
