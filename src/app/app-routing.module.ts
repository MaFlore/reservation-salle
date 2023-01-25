import { ReservationComponent } from './reservation/reservation.component';
import { SalleComponent } from './salle/salle.component';
import { EquipementComponent } from './equipement/equipement.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'equipements', component: EquipementComponent },
  { path: 'salles', component: SalleComponent },
  { path: 'reservations', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
