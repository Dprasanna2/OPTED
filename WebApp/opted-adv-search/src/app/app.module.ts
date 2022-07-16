import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RetryInterceptor } from './utilities/Interceptor/RetryInterceptor';
import { TokenInterceptor } from './utilities/Interceptor/TokenInterceptor';
import { SpinnerInterceptor } from './utilities/Interceptor/SpinnerInterceptor';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './Services/Authentication.service';
import { LoginPageComponent } from './z_components/common/login-page/login-page.component';
import { SpinnerComponent } from './z_components/common/spinner/spinner.component';
import { CanActivateGuard } from './utilities/Guard/can-activate.guard';
import { AgGridModule } from '@ag-grid-community/angular';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule
    // NgbModule
  ],
  declarations: [
    AppComponent,
    LoginPageComponent,
    SpinnerComponent,
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

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AgGridModule } from '@ag-grid-community/angular';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AgGridModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
