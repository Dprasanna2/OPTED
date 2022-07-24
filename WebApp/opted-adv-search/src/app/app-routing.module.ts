import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './z_components/common/login-page/login-page.component';
import { RegisterPageComponent } from './z_components/common/register-page/register-page.component';
import { UploadFileComponent } from './z_components/common/upload-file/upload-file.component';
import { MainPageComponent } from './z_components/layout/main-page/main-page.component';
import { SearchResultComponent } from './z_components/layout/main-page/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MainPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'registration',
    component: RegisterPageComponent
  },
  {
    path: 'upload',
    component: UploadFileComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
