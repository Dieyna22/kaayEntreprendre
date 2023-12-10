import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getGuide() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un guide
  postGuide(guide: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, guide);
  }

  // Méthode pour supprimer un guide
  deleteGuide(guideId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${guideId}`);
  }
}
