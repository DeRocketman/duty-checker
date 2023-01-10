import { Component, OnInit } from '@angular/core';
import {CheckOptions} from "../../../shared/check-options";
import {User} from "../../../shared/user";
import {UserService} from "../../../service/user.service";
import {StorageService} from "../../../service/storage.service";

@Component({
  selector: 'dutch-duty-check-main-view',
  templateUrl: './duty-check-main-view.component.html',
  styleUrls: ['./duty-check-main-view.component.scss']
})
export class DutyCheckMainViewComponent implements OnInit {
  checkOptions? : CheckOptions;
  signedUser? : User;
  constructor(
    private userService: UserService,
    private storageService: StorageService,
  ) { }
  ngOnInit(): void {
    this.userService.getByEMail(this.storageService.getMail()).subscribe(
      res => {
        this.signedUser = res;
        this.checkOptions = res.checkOptions;
      }
    )
  }
  updateCheckOptions(updatedOptions: CheckOptions): void {
    if (this.signedUser) {
      this.signedUser.checkOptions = updatedOptions;
    }
    this.checkOptions = updatedOptions;
    window.location.reload()
  }
}
