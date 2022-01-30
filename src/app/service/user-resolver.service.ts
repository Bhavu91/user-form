import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class UserResolverService implements Resolve<boolean> {

  constructor(private readonly userService: UserService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params && route.params.username) {
      return this.userService
        .getUserDetails(route.params.username)
        .pipe(
          map((res: any) => res),
          catchError(() => this.router.navigateByUrl('home'))
        );
    } else {
      return null;
    }
  }
}
