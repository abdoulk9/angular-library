import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.models';
import { Subscription } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

books: Book[];
bookSubscription: Subscription;//souscription au subject du service

  constructor(private booksService: BooksService,
              private  router: Router) { }

  ngOnInit() {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
  }
  //Création d'un nouveau  livre
  onNewBook(){
    this.router.navigate(['/books', 'new']);
  }
  //Suppression d'un livre
  onDeleteBook(book: Book){
    this.booksService.removeBook(book);
  }
  //Visualisation d'un livre
  onViewBook(id: number){
    this.router.navigate(['/books','views', id]);
  }

  //Desinscription au subject à la destruction du component

  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }

}
