import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDJNTIpAQasiqUMYRnVL7MEtk5jkn2tULc",
      authDomain: "book-data-fc193.firebaseapp.com",
      databaseURL: "https://book-data-fc193.firebaseio.com",
      projectId: "book-data-fc193",
      storageBucket: "book-data-fc193.appspot.com",
      messagingSenderId: "830033866271",
      appId: "1:830033866271:web:d496b13a02192cac74ef2a",
      measurementId: "G-N3ZJPYV4M9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
