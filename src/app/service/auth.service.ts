import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // URL de votre backend
  userObj: string='';
  authToken: string='';
  isAdmin$: any;
  isExperimente$: any;
  isNovice$: any;
  isAuth$: any;

  constructor(private http: HttpClient) {}
  // login
   //service
   login(user: any, onSuccess: Function){
    return this.http.post(`${this.apiUrl}/login`, user).subscribe((reponse: any) => onSuccess(reponse));
  }
  // connexion



  // sweetalert
  showMessage(icon:any, titre:any, texte:any){
    Swal.fire({
      icon: icon,
      title: titre,
      text: texte,
    })
}

  // inscription
  inscriptionNovice(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajouter-utilisateur-entrepreneur-novice`, user);
  }
  inscriptionExperimente(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/ajouter-utilisateur-entrepreneur-experimente`, user);
  }
 
  // connexion
  signIn(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }
  getUsers(){
    return this.http.get(`${this.apiUrl}/liste_utilisateur`)
  }


}

