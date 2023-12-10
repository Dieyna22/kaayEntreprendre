import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getRessource() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un ressource
  postRessource(ressource: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, ressource);
  }

  // Méthode pour supprimer un ressource
  deleteRessource(ressourceId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${ressourceId}`);
  }
}