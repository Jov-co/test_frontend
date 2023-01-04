import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router'
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { TableComponent } from './screens/table/table.component';

import { Route } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:HomeComponent},
  {path:'result' , component:TableComponent}

];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent]
