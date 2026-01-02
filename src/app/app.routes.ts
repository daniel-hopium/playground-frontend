import { Routes } from '@angular/router';
import { AppRoutes } from './enums/routes.enum';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
  { path: AppRoutes.Home, component: Home },
  { path: AppRoutes.Login, component: Login },
];
