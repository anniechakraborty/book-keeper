import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

const httpOtions = {
    headers : new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})

export class BooksService {
    private apiUrl = 'http://127.0.0.1:5000/api';
    // bookData : any;

    constructor(private http: HttpClient){}

    getAllBooks(){
        return this.http.get(`${this.apiUrl}/allBooks`);
    }

    getBook(id : number){
        return this.http.get(`${this.apiUrl}/book/${id}`);
    }

    addBook(book : any){
        return this.http.post(this.apiUrl, book, httpOtions);
    }

    editBook(book : any, id : number){
        if(book.id === id){
            const url = `${this.apiUrl}/book/${id}`;
            return this.http.put(url, book, httpOtions);
        }
    }
}