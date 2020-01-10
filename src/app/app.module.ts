import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule}  from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleComponent } from './book-list/single/single.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
{ path: 'auth/signup', component: SignupComponent },
{ path: 'auth/signin', component: SigninComponent },
{ path: 'books', component: BookListComponent },
{ path: 'books/news', component: BookFormComponent },
{ path: 'books/views/:id', component: SingleComponent }
] 

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SingleComponent,
    BookFormComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
