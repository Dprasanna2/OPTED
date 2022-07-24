import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './z_components/common/login-page/login-page.component';
import { RegisterPageComponent } from './z_components/common/register-page/register-page.component';
import { LayoutComponent } from './z_components/layout/layout.component';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => import('./z_components/layout/layout.module').then(m => m.LayoutModule),
//     pathMatch: 'full',
//   },
//   { path: '**', redirectTo: '' }
// ];


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registration',
    component: RegisterPageComponent
  },
  { path: '**', redirectTo: '' }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: CompanyDetailsGridComponent,
//     canActivate: [CanActivateGuard],
//     pathMatch: 'full',
//   },  
//   {
//     path: 'CompanyDetails',
//     component: CompanyDetailsGridComponent,
//     canActivate: [CanActivateGuard],
//   },
//   {
//     path: 'CompanyDetails/AddEdit/:isEdit',
//     component: AddEditCompanyDetailsComponent,
//     canActivate: [CanActivateGuard],
//   },
//   {
//     path: 'CompanyDetails/AddEdit/:isEdit/:id',
//     component: AddEditCompanyDetailsComponent,
//     canActivate: [CanActivateGuard],
//   },
//   {
//     path: 'login',
//     component: LoginPageComponent
//   },
//   { path: '**', redirectTo: '' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
