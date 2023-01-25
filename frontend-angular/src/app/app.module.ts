import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminMainViewComponent } from './component/admin-view/admin-main-view/admin-main-view.component';
import { BasicDataMainViewComponent } from './component/basic-data-view/basic-data-main-view/basic-data-main-view.component';
import { PlaceViewComponent } from './component/basic-data-view/place-view/place-view.component';
import { TravelTimeViewComponent } from './component/basic-data-view/travel-time-view/travel-time-view.component';
import { RuleSetMainViewComponent } from './component/rule-set-view/rule-set-main-view/rule-set-main-view.component';
import { SignInMainViewComponent } from './component/sign-in-view/sign-in-main-view/sign-in-main-view.component';
import { SignUpMainViewComponent } from './component/sign-up-view/sign-up-main-view/sign-up-main-view.component';
import { DutyCheckMainViewComponent } from './component/duty-check/duty-check-main-view/duty-check-main-view.component';
import { CheckOptionsViewComponent } from './component/duty-check/check-options-view/check-options-view.component';
import { ReviewResultViewComponent } from './component/duty-check/review-result-view/review-result-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ErrorInterceptor} from "./helper/error.interceptor";
import {AuthInterceptor} from "./helper/auth.interceptor";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatStepperModule} from "@angular/material/stepper";
import { ElementViewComponent } from './component/basic-data-view/element-view/element-view.component';
import { RuleSetCreateComponent } from './component/rule-set-view/rule-set-create/rule-set-create.component';
import { RuleSetEditComponent } from './component/rule-set-view/rule-set-edit/rule-set-edit.component';
import { RuleSetFormComponent } from './component/rule-set-view/rule-set-form/rule-set-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminMainViewComponent,
    BasicDataMainViewComponent,
    PlaceViewComponent,
    TravelTimeViewComponent,
    RuleSetMainViewComponent,
    SignInMainViewComponent,
    SignUpMainViewComponent,
    DutyCheckMainViewComponent,
    CheckOptionsViewComponent,
    ReviewResultViewComponent,
    ElementViewComponent,
    RuleSetCreateComponent,
    RuleSetEditComponent,
    RuleSetFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule,
    FormsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
