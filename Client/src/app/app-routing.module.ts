import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OffreComponent} from './offre/offre.component';
import {NvoffreComponent} from './nvoffre/nvoffre.component';
import {OffreEditComponent} from './offre-edit/offre-edit.component';
import {ListoffresComponent} from './Acceuil/listoffres/listoffres.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthenticationComponent} from './pages/authentication/authentication.component';
import {DashboardComponent} from './Dashboard/dashboard/dashboard.component';
import {CvComponent} from './cv/cv.component';
import {MessageComponent} from './message/message.component';
import {BoitmessagesComponent} from './boitmessages/boitmessages.component';



const routes: Routes = [
  {path : "login" , component :LoginComponent},
  {path : "authentication" , component :AuthenticationComponent},
  {path : "dashboard" , component: DashboardComponent },
  {path : "offres" , component :OffreComponent},
  {path : "listeoffres" , component:ListoffresComponent },
  {path : "nvoffre" , component: NvoffreComponent},
  {path : "editoffre/:id" , component: OffreEditComponent},
  {path : "cv", component:CvComponent},
  {path : "contact", component: MessageComponent},
  {path :"inbox" , component: BoitmessagesComponent},

  { path: '', redirectTo: '/listeoffres', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
