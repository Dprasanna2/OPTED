import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchBarComponent } from './main-page/search-bar/search-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SearchResultComponent } from './main-page/search-result/search-result.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '../common/login-page/login-page.component';
import { AuthenticationService } from 'src/app/Services/Authentication.service';

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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule
  ],
  declarations: [
    LayoutComponent,
    MainPageComponent,
    SearchBarComponent,
    SearchResultComponent,
    NavMenuComponent,
    // LoginPageComponent
  ],
  providers: [
    AuthenticationService
    // CanActivateGuard
  ]
})
export class LayoutModule { }
