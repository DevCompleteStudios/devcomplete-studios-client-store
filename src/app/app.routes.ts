import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScriptsComponent } from './pages/scripts/scripts.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'scripts', component: ScriptsComponent},
];
