import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, tap } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{

  showSteps: boolean = true;
  choixFormulaire: boolean = true;
  
  user: any;
  credentials: any;
  loading!: boolean;
  userConnected: any;
  errorMsg: any;
  experience: any;
  realisation: any;
  userConnect: any;

  constructor(private route:Router, private authService: AuthService){}
  ngOnInit() {
   
  }

  public afficherFormulaire() {
    this.choixFormulaire = !this.choixFormulaire;
  }

  public afficherStep() {
    this.showSteps = !this.showSteps;
  }

  submitFunction(event: Event) {
    event.preventDefault();
  }

  // Nos attributs

  activite:string='';
  image:string='';
  emailLogin: string = "";
  passwordLogin: string = "";
  experimente: string = "";
  novice: string = "";
  prenom: string = "";
  nom: string = "";
  email: string = "";
  password: string = "";
  adresse: string = "";
  region:string="";
  statExp:string="";
  statNov:string="";
  users:any;

  
// connexion

login() {
  // alert('connecter');
  if (this.emailLogin == "" || this.passwordLogin == "") {
    this.showMessage("error", "Oops","Veuillez renseigner tous les champs");
  } else {

    this.authService.login({ email: this.emailLogin, password: this.passwordLogin }, (reponse: any) => {

      console.log(reponse);
      if (reponse.token) {
        this.showMessage("success","Felicitations" ,"Connexion faite avec succès");

        //stocker notre les info de la requete dans notre localstorage
        localStorage.setItem("userOnline", JSON.stringify(reponse));

        //recuperer le le userConnecter
        const userOnline = JSON.parse(localStorage.getItem('userOnline') || '');

        if (reponse.user.role_id === 1) {
          this.route.navigate(['/accueilAdmin']);
        } else if (reponse.user.role_id === 3) {
          this.route.navigate(['/accueilEntrepreneur']);
        } else {
          this.route.navigate(['/accueilUser']);
        }
      } else {
        this.showMessage("error", "Oops","Login ou pass incorrect");
      }
    });
  }
}





// sweetalert
showMessage(icon:any, titre:any, texte:any){
  Swal.fire({
    icon: icon,
    title: titre,
    text: texte,
  })
}


  connexion() {
    // alert(this.emailLogin);
    // alert(this.passwordLogin);

    // EmailRegex
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (this.emailLogin == "" || this.passwordLogin == "") {
      this.alertMessage("error", "Attention", "Veillez renseigner tous les champs");
    } else if (!this.emailLogin.match(emailPattern)) {
      this.alertMessage("error", "Attention", "Veillez revoir votre email");
    } else if (this.passwordLogin.length < 5) {
      this.alertMessage("error", "Attention", "Le mot de passe doit contenir plus de huit caractéres");
    } else {
      this.alertMessage("success", "Bravo", "Vous etes connecté avec succés");
    }

  }

  // Initialiser le contenu actuel
  currentContent: string = '';

  // Mettre à jour le contenu actuel
  showComponant(contentId: string): void {
    this.currentContent = contentId;
  }

  

  // sweetAlert
  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    });
  }

// inscription
  signNovice() {
    this.user={
      prenom:this.prenom,
      nom:this.nom,
      email:this.email,
      adresse:this.adresse,
      password:this.password,
      region:this.region,
      image:this.image
      
    }
    alert("hi")
    this.authService.inscriptionNovice(this.user).subscribe(
      (response:any) => {
        console.log(this.user)
        alert("hO")
       
        const token = response.access_token;
        // this.route.navigate(['/accueilUser'])
      },
      (error:any) => {
        // Gérez les erreurs d'inscription.
        console.error('Erreur d\'inscription :', error);
      }
    );
  }
// inscription
  signExperimente() {
    this.user={
      prenom:this.prenom,
      nom:this.nom,
      email:this.email,
      adresse:this.adresse,
      password:this.password,
      region:this.region,
      realisation:this.realisation,
      experience:this.experience,
      activite:this.activite
    }
    this.authService.inscriptionExperimente(this.user).subscribe(
      (response:any) => {
       
        const token = response.access_token;
        this.route.navigate(['/login'])
      },
      (error:any) => {
        // Gérez les erreurs d'inscription.
        console.error('Erreur d\'inscription :', error);
      }
    );
  }

  // connexion
  signIn() {
    this.credentials={
      email:this.emailLogin,
      password:this.passwordLogin
    }
    this.authService.signIn(this.credentials).subscribe(
      (response:any) => {
        // Stockez le token dans un service ou dans le stockage local (localStorage).
        console.log(response)
        
       console.log(this.user)
       
        console.log(this.credentials)
        this.route.navigate(['/accueilUser'])
      },
      (error:any) => {
        // Gérez les erreurs de connexion.
        console.error('Erreur de connexion :', error);
      }
    );
  }
}
