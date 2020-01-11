import { Injectable } from '@angular/core';
import { Book } from 'src/models/book.models';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase/app';
import DataSnapshot = firebase.database.DataSnapshot;
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }
  //Emission d'une copie de larray book
  emitBooks() {
    this.booksSubject.next(this.books);
  }
  //Enregistrement d'un livre dans la bd
  saveBook() {
    firebase.database().ref('/books').set(this.books);
  }

  getBooks() {
    firebase.database().ref('/books')
      .on('value', (data: DataSnapshot) => {
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      });
  }
  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
  //Creation d'un livre
  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBook();//Enregistre le nouveau livre dans l'array
    this.emitBooks();//Emetre le subject
  }
  //Suppression d'un livre
  removeBook(book: Book) {
    if (book.photo) {
      const storageRef = firebase.storage().refFromURL(book.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo deleted !');
        },
        (error) => {
          console.log("Couldn't delete photo!");
        }
      );
    }
    const indexBookToRemove = this.books.findIndex(
      (bookFind) => {
        if (bookFind === book) {
          return true;
        }
      }
    );
    this.books.splice(indexBookToRemove, 1);
    this.saveBook();
    this.emitBooks();
  }
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const uniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + uniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement...');
          },
          (error) => {
            console.log('Erreur de chagement ! :' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
