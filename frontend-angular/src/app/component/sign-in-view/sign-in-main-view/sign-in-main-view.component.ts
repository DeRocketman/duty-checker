import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {StorageService} from "../../../service/storage.service";

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'dutch-sign-in-main-view',
  templateUrl: './sign-in-main-view.component.html',
  styleUrls: ['./sign-in-main-view.component.scss']
})
export class SignInMainViewComponent implements OnInit {
  signInForm: FormGroup;
  matcher = new LoginErrorStateMatcher();
  pwHide = true;
  errorMsg = '';
  constructor(
    private fb : FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {
    this.signInForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  signInUser(): void {
    let email = this.signInForm?.get("email")?.value;
    let password = this.signInForm?.get("password")?.value;
    this.authService.signIn(email, password).subscribe(res=> {
      console.log(res)
      this.storageService.saveUser(res);
      this.storageService.storeEmail(email);
      this.router.navigate(["duty-check"])
    })
  }

}
