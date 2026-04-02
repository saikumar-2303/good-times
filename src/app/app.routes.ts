import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NextPageComponent } from './next-page/next-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // 👈 default page
  { path: 'next-page', component: NextPageComponent }
];