import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementCreateComponent } from './movement-create/movement-create.component';
import { MovementListComponent } from './movement-list/movement-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from "./home-page/home-page.component";
import {CardListComponent} from "./card-list/card-list.component";
import {CardCreateComponent} from "./card-create/card-create.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path: "movement-list", component: MovementListComponent},
  {path: "movement-create", component: MovementCreateComponent},
  {path: "card-list", component: CardListComponent},
  {path: "card-create", component: CardCreateComponent},
  {path: "", redirectTo: '/home', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "profile", component: ProfileComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
