import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './modules/authors/authors.component';
import { EditAuthorsComponent } from './modules/edit-authors/edit-authors.component';
import { AddAuthorsComponent } from './modules/add-authors/add-authors.component';
import { AddQuotesComponent } from './modules/add-quotes/add-quotes.component';
import { QuotesComponent } from './modules/quotes/quotes.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthorService } from './services/quotes-api.service';
import { HandleErrorService } from './services/handle-error.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    EditAuthorsComponent,
    AddAuthorsComponent,
    AddQuotesComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorService,HandleErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
