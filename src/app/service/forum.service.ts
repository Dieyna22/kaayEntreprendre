import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getForum() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un forum
  postForum(forum: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, forum);
  }

  // Méthode pour supprimer un forum
  deleteForum(forumId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${forumId}`);
  }
}
