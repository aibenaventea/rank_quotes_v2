import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HandleErrorService } from 'src/app/services/handle-error.service';
import { Author, Quote } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/quotes-api.service';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styleUrls: ['./add-quotes.component.css']
})
export class AddQuotesComponent implements OnInit {

  quote: any
  errorMsg: any
  author: Author = {
    name: ''
  };

  constructor(
    private _authorService: AuthorService,
    private _route: ActivatedRoute,
    private _handleErrorService: HandleErrorService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      let id = params['id'];
      this._authorService.getAuthor(id).subscribe(resp => {
        this.author = resp.author;
      })
    });
  }
  createQuote() {

    let quote: Quote = {
      quote: this.quote
    }
    let observable = this._authorService.createQuote(this.author._id, quote)
    observable.subscribe(resp => {
      this._router.navigate(['/']);
    },
      error => {
        this.errorMsg = this._handleErrorService.handleError(error);
      });
  }

  clickSubmit() {
    this.createQuote();
  }

}
