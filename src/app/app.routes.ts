import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: GridComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: GridComponent },
];
