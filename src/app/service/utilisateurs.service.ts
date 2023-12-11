import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  apiUrl = 'http://127.0.0.1:8000';
  

  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un user
  postUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, user);
  }

  // Méthode pour supprimer un user
  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}
