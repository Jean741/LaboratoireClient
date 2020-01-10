import {RouterModule, Routes} from '@angular/router';
import {MembreViewComponent} from './membre-view/membre-view.component';
import {PublicationsViewComponent} from './publications-view/publications-view.component';
import {NgModule} from '@angular/core';
import {ConnectionComponent} from './connection/connection.component';
import {MembreComponent} from './membre/membre.component';
import {RoleComponent} from './role/role.component';
import {EvenementsViewComponent} from './evenements-view/evenements-view.component';
import {EvenementComponent} from './evenement/evenement.component';
import {OutilsComponent} from './outils/outils.component';
import {PublicationsComponent} from './publications/publications.component';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  { path: 'membres', component: MembreViewComponent },
  {path: 'membres/:id',component:MembreComponent},
  { path: 'publications', component: PublicationsViewComponent },
  {path: 'publications/:id',component:PublicationsComponent},
  { path: 'evenements', component: EvenementsViewComponent },
  {path: 'evenements/:id',component:EvenementComponent},
  { path: 'outils', component: OutilsComponent },
  {path: 'outils/:id',component:OutilsComponent},

  { path: 'connection', component: ConnectionComponent },

  { path: 'roles', component: RoleComponent },
  { path: '', component: ConnectionComponent }
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
