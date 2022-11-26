import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/quotes-api.service';
import { HandleErrorService } from 'src/app/services/handle-error.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {

  author: Author = {
    name: ''
  };
  errorMsg: any;

  constructor(private _authorService: AuthorService, private _router: Router, private _handleErrorService: HandleErrorService) { }

  ngOnInit(): void {
  }
  createAuthor() {
    let observable = this._authorService.authorCreate(this.author)
    observable.subscribe(author => {
      this._router.navigate(['/']);
    },
      (error) => {
        this.errorMsg = this._handleErrorService.handleError(error);
      });
  }

}
