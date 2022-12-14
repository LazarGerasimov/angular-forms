import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';
import { ReducePipe } from './reduce.pipe';
import { appInterceptorProvider } from './app.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyRouterLinkDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MaxCountDirective,
    ReducePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for template driven forms
    ReactiveFormsModule, // for in class forms that we have to bind in the template
    HttpClientModule,
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
