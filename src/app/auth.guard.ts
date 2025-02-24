import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  let isLoggedIn = sessionStorage.getItem('isLoggedIn');
  if (isLoggedIn == 'false') {
    alert('You are not allowed to view this page');
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
