import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.services';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent implements OnInit {
  books;
  constructor(private bookService: BooksService){}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe((books)=> {
      // this.books = books;
      // console.log(this.books);
      // console.log(books, typeof books);
      // console.log(typeof this.books);
      // for (let key in books) {
      //   if (books.hasOwnProperty(key)) {
      //     this.books = books[key];
      //     console.log(key, this.books);
      //   }
      // }
      this.books = books;
    });
  }

}
