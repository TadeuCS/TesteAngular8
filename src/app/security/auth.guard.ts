import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (state.url.endsWith('login')) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        } else if (localStorage['token'] == null) {
            this.router.navigate(['/login']);
        }
        return true;
    }
}