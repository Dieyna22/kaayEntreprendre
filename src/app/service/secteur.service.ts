import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getSecteur() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un secteur
  postSecteur(secteur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, secteur);
  }

  // Méthode pour supprimer un secteur
  deleteSecteur(secteurId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${secteurId}`);
  }
}
