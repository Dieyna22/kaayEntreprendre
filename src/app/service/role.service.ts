import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiUrl = 'http://127.0.0.1:8000';


  constructor(private http: HttpClient) { }
  getRole() {
    return this.http.get(`${this.apiUrl}`);
  }

  // Méthode pour ajouter un role
  postRole(role: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, role);
  }

  // Méthode pour supprimer un role
  deleteRole(roleId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${roleId}`);
  }
}
