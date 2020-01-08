import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { SigneupComponent } from './signeup/signeup.component';
import { SigneinComponent } from './signein/signein.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleComponent } from './book-list/single/single.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentifComponent,
    SigneupComponent,
    SigneinComponent,
    BookListComponent,
    SingleComponent,
    BookFormComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
