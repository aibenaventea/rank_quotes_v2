import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './modules/authors/authors.component';
import { AddAuthorsComponent } from './modules/add-authors/add-authors.component';
import { EditAuthorsComponent } from './modules/edit-authors/edit-authors.component';
import { QuotesComponent } from './modules/quotes/quotes.component';
import { AddQuotesComponent } from './modules/add-quotes/add-quotes.component';

const routes: Routes = [
  { path: "", component: AuthorsComponent },
  { path: "new", component: AddAuthorsComponent },
  { path: "edit/:id", component: EditAuthorsComponent },
  { path: "quotes/list/:id", component: QuotesComponent },
  { path: "quotes/add/:id", component: AddQuotesComponent },
  { path: '', pathMatch: 'full', redirectTo: ''},
  // { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
