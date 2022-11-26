import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/quotes-api.service';
import { HandleErrorService } from 'src/app/services/handle-error.service';


@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {

  author: Author = {
    name: ''
  }
  errorMsg: any;

  constructor(private _router: Router, private _route: ActivatedRoute, private _authorService: AuthorService,
    private _handleErrorService:HandleErrorService ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getAuthor(id);
    });
  }
  getAuthor(id: string) {
    let observable = this._authorService.getAuthor(id)
    observable.subscribe(resp => {
      this.author = resp.author
    });
  }

  clickCancel() {
    this._router.navigate(['/']);
  }

  clickSumbit() {
    let observable = this._authorService.updateAuthor(this.author._id, this.author)
    observable.subscribe(resp => {
      this.author = resp.author;
      this._router.navigate(['/']);
    },
      error => this.errorMsg = this._handleErrorService.handleError(error))
  }
}
