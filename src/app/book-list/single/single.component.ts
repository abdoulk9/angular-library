import { Component, OnInit } from '@angular/core';
import { Book } from 'src/models/book.models';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
 book: Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.book = new Book( '', '');
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Book) =>{
        this.book = book;
      }
    );
  }
  onGoBack(){
    this.router.navigate(['/books']);
  }

}
