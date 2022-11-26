import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author, AuthorResp, AuthorsResp, Quote, QuoteResp } from '../interfaces/author';
import { environment } from "../../environments/environment";

const { baseUrl } = environment

@Injectable()
export class AuthorService {

  constructor(private _http: HttpClient) { }

  authorCreate(author: Author) {
    return this._http.post<AuthorResp>(`${baseUrl}/authors`, author);
  }

  getAuthors() {
    return this._http.get<AuthorsResp>(`${baseUrl}/authors`);
  }

  getAuthor(id: any) {
    return this._http.get<AuthorResp>(`${baseUrl}/authors/${id}`)
  }

  updateAuthor(id: any, author: Author) {
    return this._http.put<AuthorResp>(`${baseUrl}/authors/${id}`, author);
  }

  deleteAuthor(id:any) {
    return this._http.delete<AuthorResp>(`${baseUrl}/authors/${id}`);
  }

  createQuote(id:any, quote: Quote) {
    return this._http.post<AuthorResp>(`${baseUrl}/quotes/${id}`, quote)
  }

  updateQuote(quoteId: any, quote: Quote) {
    return this._http.put<QuoteResp>(`${baseUrl}/quotes/${quoteId}`, quote);
  }

  deleteQuote(id: any, quoteId: any) {
    return this._http.delete(`${baseUrl}/quotes/${id}/${quoteId}`);
  }

}
