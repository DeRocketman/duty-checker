import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "../service/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    public router: Router,
    private storageService: StorageService,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const signedUser = this.storageService.getUser();
    if (signedUser) {
      for (let role of signedUser.role) {
        if (role == "ROLE_USER") {
          this.router.navigate([".."])
        }
      }
    }
    return true
  }
}
