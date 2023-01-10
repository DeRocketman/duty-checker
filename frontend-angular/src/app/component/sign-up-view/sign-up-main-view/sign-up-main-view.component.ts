import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {User} from "../../../shared/user";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

export class SignUpErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'dutch-sign-up-main-view',
  templateUrl: './sign-up-main-view.component.html',
  styleUrls: ['./sign-up-main-view.component.scss']
})
export class SignUpMainViewComponent implements OnInit {
  signUpForm: FormGroup;
  matcher = new SignUpErrorStateMatcher();
  pwHide = true;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  signUpUser(formValue: User): void {
    let signUpUser: User = {
      ...formValue
    }
    this.authService.signUp(signUpUser).subscribe(() => {
      window.alert("Benutzer erfolgreich erstellt!")
      this.router.navigate(["sign-in"])
    });
  }

}
