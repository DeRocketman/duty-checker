import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StorageService} from "./service/storage.service";
import {Router} from "@angular/router";
import {UserService} from "./service/user.service";
import {AuthService} from "./service/auth.service";
import {User} from "./shared/user";

@Component({
  selector: 'dutch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = ""
  signedUser?: User
  signedUserName: string = "Du! Schön das du da bist :-)";
  constructor(
    private storageService: StorageService,
    private router: Router, private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.storageService.getUser()) {
      this.signedUser = {
        ...this.storageService.getUser()
      };
      if (this.signedUser?.firstName){
        this.signedUserName = this.signedUser.firstName + "! Schön das du da bist :-)";
      }
    }
  }

  signOut(): void {
    this.authService.signOut().subscribe(
      (res) => {
        console.log(res)
        this.storageService.clean();
        window.location.reload();
      },
      (err) => {
        this.storageService.clean();
        window.location.reload();
        console.log(err);
      }
    )
    this.storageService.clean();
    this.router.navigate([''])
  }

}
