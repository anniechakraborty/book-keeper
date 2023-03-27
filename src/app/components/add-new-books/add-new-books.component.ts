import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-books',
  templateUrl: './add-new-books.component.html',
  styleUrls: ['./add-new-books.component.scss']
})
export class AddNewBooksComponent {
  @Output() onAddBook = new EventEmitter();
  bookName : string;
  author : string;
  bookType : string;
  startDate : string;
  endDate : string;
  description : string;

  onSubmit(){
    if(!this.bookName){
      alert("Please enter a book title!");
      return;
    }
    if(!this.author){
      alert("Please enter an author!");
      return;
    }

    if(this.endDate < this.startDate){
      alert("End Date must be after Start Date!");
      return;
    }
    
    console.log(this.bookName, this.author, this.bookType);
    console.log(this.startDate, typeof this.startDate);
    console.log(this.endDate, typeof this.endDate);
    console.log(this.description);
  }

  changeBook(value){
    this.bookType = value;
  }
}
