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
  login(email: string, password: string) {
    return this.http.post<{ status_body: string, token: string }>('http://localhost:8000/api/login', { email: email, password: password }).pipe(
      tap(({ status_body, token }) => {
        this.userObj = status_body;
        this.authToken = token;
        if (email == "dialobe110@gmail.com" && password == "Passer@123") {
          this.isAdmin$.next(true);
        } else
          localStorage.setItem('token', JSON.stringify(this.authToken));
        localStorage.setItem('userConnected', JSON.stringify(this.userObj));

        let userCon = JSON.parse(localStorage.getItem('userConnected') || '')

        if (userCon.role === "entrepreneur_experimente") {
          this.isExperimente$.next(true)
        } else if (userCon.role === "entrepreneur_novice") {
          this.isNovice$.next(true);
        } else {
          this.showMessage("error", 'Oops',"Email ou mot de passe incorrecte")
        }

        this.isAuth$.next(true); // on met à je la val de isAuth$

        console.log(this.isAdmin$)
        console.log(this.isExperimente$)
        console.log(this.isNovice$)
      })
    );
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

