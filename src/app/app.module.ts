import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GestionGuideComponent } from './admin/gestion-guide/gestion-guide.component';
import { GestionEvenementComponent } from './admin/gestion-evenement/gestion-evenement.component';
import { GestionCommentaireComponent } from './admin/gestion-commentaire/gestion-commentaire.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { GestionRoleComponent } from './admin/gestion-role/gestion-role.component';
import { GestionSecteurComponent } from './admin/gestion-secteur/gestion-secteur.component';
import { GestionForumComponent } from './admin/gestion-forum/gestion-forum.component';
import { AccueilAdminComponent } from './admin/accueil-admin/accueil-admin.component';
import { AccueilUserComponent } from './user/accueil-user/accueil-user.component';
import { GuideComponent } from './user/guide/guide.component';
import { ForumComponent } from './user/forum/forum.component';
import { EtudeCasComponent } from './user/etude-cas/etude-cas.component';
import { EvenementComponent } from './user/evenement/evenement.component';
import { AuthComponent } from './login/auth/auth.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { SidebarComponent } from './header-footer/sidebar/sidebar.component';
import { AccueilEntrepreneurComponent } from './entrepreneur/accueil-entrepreneur/accueil-entrepreneur.component';
import { DetailProjetComponent } from './entrepreneur/detail-projet/detail-projet.component';
import { ExperienceComponent } from './entrepreneur/experience/experience.component';
import { DetailExperienceComponent } from './entrepreneur/detail-experience/detail-experience.component';
import { DetailRessourceComponent } from './entrepreneur/detail-ressource/detail-ressource.component';
import { DetailGuideComponent } from './user/detail-guide/detail-guide.component';
import { DetailEvenComponent } from './user/detail-even/detail-even.component';
import { DetailCasComponent } from './user/detail-cas/detail-cas.component';
import { UserRessourceComponent } from './user/user-ressource/user-ressource.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionGuideComponent,
    GestionEvenementComponent,
    GestionCommentaireComponent,
    GestionUserComponent,
    GestionRoleComponent,
    GestionSecteurComponent,
    GestionForumComponent,
    AccueilAdminComponent,
    AccueilUserComponent,
    GuideComponent,
    ForumComponent,
    EtudeCasComponent,
    EvenementComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AccueilEntrepreneurComponent,
    DetailProjetComponent,
    ExperienceComponent,
    DetailExperienceComponent,
    DetailRessourceComponent,
    DetailGuideComponent,
    DetailEvenComponent,
    DetailCasComponent,
    UserRessourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
