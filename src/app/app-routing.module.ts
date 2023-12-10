import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './login/auth/auth.component';
import { AccueilAdminComponent } from './admin/accueil-admin/accueil-admin.component';
import { GestionCommentaireComponent } from './admin/gestion-commentaire/gestion-commentaire.component';
import { GestionEvenementComponent } from './admin/gestion-evenement/gestion-evenement.component';
import { GestionGuideComponent } from './admin/gestion-guide/gestion-guide.component';
import { GestionRoleComponent } from './admin/gestion-role/gestion-role.component';
import { GestionSecteurComponent } from './admin/gestion-secteur/gestion-secteur.component';
import { GestionUserComponent } from './admin/gestion-user/gestion-user.component';
import { GestionForumComponent } from './admin/gestion-forum/gestion-forum.component';
import { AccueilEntrepreneurComponent } from './entrepreneur/accueil-entrepreneur/accueil-entrepreneur.component';
import { DetailExperienceComponent } from './entrepreneur/detail-experience/detail-experience.component';
import { DetailProjetComponent } from './entrepreneur/detail-projet/detail-projet.component';
import { DetailRessourceComponent } from './entrepreneur/detail-ressource/detail-ressource.component';
import { ExperienceComponent } from './entrepreneur/experience/experience.component';
import { RessourceComponent } from './entrepreneur/ressource/ressource.component';
import { AccueilUserComponent } from './user/accueil-user/accueil-user.component';
import { GuideComponent } from './user/guide/guide.component';
import { ForumComponent } from './user/forum/forum.component';
import { EtudeCasComponent } from './user/etude-cas/etude-cas.component';
import { EvenementComponent } from './user/evenement/evenement.component';
import { ProfilComponent } from './entrepreneur/profil/profil.component';
import { DetailGuideComponent } from './user/detail-guide/detail-guide.component';
import { DetailEvenComponent } from './user/detail-even/detail-even.component';
import { DetailCasComponent } from './user/detail-cas/detail-cas.component';
import { UserRessourceComponent } from './user/user-ressource/user-ressource.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueilUser', pathMatch: 'full' },
  { path: 'login', component: AuthComponent },

  { path: 'accueilAdmin', component: AccueilAdminComponent },
  { path: 'gestionCommentaire', component: GestionCommentaireComponent },
  { path: 'gestionEvenement', component: GestionEvenementComponent },
  { path: 'gestionGuide', component: GestionGuideComponent },
  { path: 'gestionRole', component: GestionRoleComponent },
  { path: 'gestionSecteur', component: GestionSecteurComponent },
  { path: 'gestionUsers', component: GestionUserComponent },
  { path: 'gestionForum', component: GestionForumComponent },

  { path: 'accueilEntrepreneur', component: AccueilEntrepreneurComponent },
  { path: 'detailsExperience', component: DetailExperienceComponent },
  { path: 'detailsProjet', component: DetailProjetComponent },
  { path: 'detailsRessource', component: DetailRessourceComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'ressourceEntrepreneur', component: RessourceComponent },
  {path:  'profil', component:ProfilComponent},

  { path: 'accueilUser', component: AccueilUserComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'detailsGuide', component: DetailGuideComponent },
  { path: 'ressourceUser', component: UserRessourceComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'etudeCas', component: EtudeCasComponent },
  { path: 'detailsCas', component: DetailCasComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'detailsEvenement', component: DetailEvenComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
