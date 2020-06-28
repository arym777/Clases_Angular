import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { TiendaComponent } from './components/tienda/tienda.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';


const appRroutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'keepers', component: KeepersComponent},
  {path: 'tienda', component: TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRroutes)
