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
  ngOnInit(): void {
    this.User();
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
  this.loading = true;
  if (this.emailLogin == "" || this.passwordLogin == "") {
    this.showMessage("error","Oops", "Veuillez remplir tout les champs");
  } else {
    this.authService.login(this.emailLogin, this.passwordLogin).pipe(
      tap(() => {
        this.userConnected = JSON.parse(localStorage.getItem('userConnected') || "");
        // console.log(this.userConnected.role);

        this.loading = false;

        if (this.authService.isAdmin$ && this.emailLogin == "admin@gmail.com" && this.passwordLogin == "passer") {
          this.route.navigate(['/accueilAdmin']);
        }

        if (this.authService.isExperimente$) {
          this.route.navigate(['/accueilEntrepreneur']);
        }

        if (this.authService.isNovice$) {
          this.route.navigate(['/acceuilUser']);
        }
      }),
      catchError((error:any) => {
        this.loading = false;
        this.errorMsg = error.message;
        return EMPTY;
      })
    ).subscribe();

  }
}

User(){
  this.authService.getUsers().subscribe((reponse:any)=>{
    this.users=reponse;
    console.log('tea', this.users)
    if( this.users){
      this.userConnect=this.users.find((element:any)=>element.email===this.emailLogin )

    }
    console.log(this.userConnect)
  })

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
