import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  apiUrl='http://127.0.0.1:8000/ressources'

  constructor(private http: HttpClient) { }
  getProjet(){
    return this.http.get(this.apiUrl);
  }
   // Méthode pour ajouter un projet
   postRessource(projet: any) {
    return this.http.post(`${this.apiUrl}`, projet);
  }

  // Méthode pour supprimer un projet
  deleteRessource(projetId: any) {
    return this.http.delete(`${this.apiUrl}/${projetId}`);
  }
}
