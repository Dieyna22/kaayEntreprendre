import { Component } from '@angular/core';
import { RessourceService } from 'src/app/service/ressource.service';

@Component({
  selector: 'app-user-ressource',
  templateUrl: './user-ressource.component.html',
  styleUrls: ['./user-ressource.component.css']
})
export class UserRessourceComponent {
  constructor(private ressourceService: RessourceService) { }
  recupRessource: any;

  ngOnInit() {
    this.ressourceService.getRessource().subscribe((ressource: any) => {
      this.recupRessource = Object.values(ressource);
      // this.recupRessource = ressource;
      console.log(this.recupRessource);
    });
    console.warn(this.recupRessource)
  }
}
