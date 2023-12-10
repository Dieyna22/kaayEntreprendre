import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getExperience() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter une experience
  postExperience(experience: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, experience);
  }

  // Méthode pour supprimer une experience
  deleteExperience(experienceId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${experienceId}`);
  }
}
