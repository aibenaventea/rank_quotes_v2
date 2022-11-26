import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/quotes-api.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Array<Author> = [];

  constructor(private _authorService: AuthorService, private _router: Router) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors() {
    let observable = this._authorService.getAuthors()
    observable.subscribe(resp => {
      this.authors = resp.authors;
    });
  }

  clickEdit(author: Author) {
    this._router.navigate([`/edit/${author._id}`]);
  }

  deleteAuthor(author: Author) {
    let observable = this._authorService.deleteAuthor(author._id)
    observable.subscribe(resp => {
      let idx = this.authors.indexOf(author);
      if(resp?.author) {
        this.authors.splice(idx, 1);
      }
    });
  }
}
