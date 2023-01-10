import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInMainViewComponent} from "./component/sign-in-view/sign-in-main-view/sign-in-main-view.component";
import {SignUpMainViewComponent} from "./component/sign-up-view/sign-up-main-view/sign-up-main-view.component";
import {DutyCheckMainViewComponent} from "./component/duty-check/duty-check-main-view/duty-check-main-view.component";
import {RuleSetMainViewComponent} from "./component/rule-set-view/rule-set-main-view/rule-set-main-view.component";
import {AdminMainViewComponent} from "./component/admin-view/admin-main-view/admin-main-view.component";
import {BasicDataMainViewComponent} from "./component/basic-data-view/basic-data-main-view/basic-data-main-view.component";
import {AuthGuard} from "./helper/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInMainViewComponent},
  { path: 'sign-up', component: SignUpMainViewComponent},
  { path: 'duty-check', component: DutyCheckMainViewComponent, canActivate:[AuthGuard]},
  { path: 'rule-set', component: RuleSetMainViewComponent, canActivate:[AuthGuard]},
  { path: 'admin', component: AdminMainViewComponent, canActivate:[AuthGuard]},
  { path: 'basic-data', component: BasicDataMainViewComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
