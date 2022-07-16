import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
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
