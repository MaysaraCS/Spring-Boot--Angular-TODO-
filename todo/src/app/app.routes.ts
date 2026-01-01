import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { RouteGuardService } from './service/route-guard.service';
import { ListTodosComponent } from '../components/list-todos/list-todos.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { ErrorComponent } from '../components/error/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'welcome/:name',
        component:WelcomeComponent, canActivate:[RouteGuardService]
    },
    {
        path:'todos',
        component:ListTodosComponent, canActivate:[RouteGuardService]
    },
    {
        path:'logout',
        component:LogoutComponent, canActivate:[RouteGuardService]
    },
    {
        path:'**',
        component:ErrorComponent
    },

];
