import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getEvenement() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un evenement
  postEvenement(evenement: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, evenement);
  }

  // Méthode pour supprimer un evenement
  deleteEvenement(evenementId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${evenementId}`);
  }
}
