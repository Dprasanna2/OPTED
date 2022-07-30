import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './z_components/common/login-page/login-page.component';
import { SpinnerComponent } from './z_components/common/spinner/spinner.component';
import { UploadFileComponent } from './z_components/common/upload-file/upload-file.component';
import { MainPageComponent } from './z_components/layout/main-page/main-page.component';
import { SearchBarComponent } from './z_components/layout/main-page/search-bar/search-bar.component';
import { SearchResultComponent } from './z_components/layout/main-page/search-result/search-result.component';
import { NavMenuComponent } from './z_components/layout/nav-menu/nav-menu.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './z_components/common/register-page/register-page.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // LayoutModule,
    AgGridModule,
    NgxCsvParserModule,
    MatSelectModule
    // NgbModule
  ],
  declarations: [
    // LayoutComponent,
    AppComponent,
    MainPageComponent,
    SearchBarComponent,
    SearchResultComponent,
    NavMenuComponent,
    UploadFileComponent,
    LoginPageComponent,
    RegisterPageComponent,
    // LoginPageComponent,
    SpinnerComponent
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // AuthenticationService,
    // CanActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

