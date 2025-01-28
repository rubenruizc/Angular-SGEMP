import { Routes } from '@angular/router';
import { FormulariopersonasComponent } from './components/formulariopersonas/formulariopersonas.component';
import { HomeComponent } from './components/home/home.component';
import { TablapersonasComponent } from './components/tablapersonas/tablapersonas.component';

export const routes: Routes = [
    {path: '', redirectTo: 'tabla', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'tabla', component: TablapersonasComponent},
    {path: 'formulario', component: FormulariopersonasComponent},
];
