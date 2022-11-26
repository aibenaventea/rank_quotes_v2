import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Author, Quote } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/quotes-api.service';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author: Author = {
    _id: '',
    name: ''
  }
  constructor(private _route: ActivatedRoute, private _authorService: AuthorService) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.getAuthor(id);
    });
  }
  getAuthor(id:any) {
    let observable = this._authorService.getAuthor(id)
    observable.subscribe(resp => {
      this.author = resp.author;
    })
  }

  updateQuote(quote: Quote) {
    let observable = this._authorService.updateQuote(quote._id, quote)
    observable.subscribe(resp => {
      console.log('updateQuote', resp);
    },
      error => console.log('error', error));
  }

  clickVoteUp(quote: Quote) {
    quote.vote++;
    this.updateQuote(quote);
  }

  clickVoteDown(quote: Quote) {
    if(quote.vote > 0) {
      quote.vote--;
      this.updateQuote(quote);
    }
  }

  deleteQuote(quote: Quote) {
    let observable = this._authorService.deleteQuote(this.author._id, quote._id)
    observable.subscribe(resp => {
      let idx : any
      idx = this.author.quotes?.indexOf(quote);
      this.author.quotes?.splice(idx, 1);
    },
      error => console.log('error', error));
  }
}
