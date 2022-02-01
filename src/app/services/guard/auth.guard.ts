import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router,
              private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot & { _routerState: { url: string } }, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const redirectUrl = route._routerState.url;

    if (!this.auth.isLoggedIn) {
      this.router.navigateByUrl(
        this.router.createUrlTree(
          [ '/signin' ], {
            queryParams: {
              redirectUrl
            }
          }
        )
      );

      return false;
    } else {
      return true;
    }
  }

}
