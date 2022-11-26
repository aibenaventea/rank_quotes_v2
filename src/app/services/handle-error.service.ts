import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor() { }
  handleError(error: any) {

    if (error?.error?.error?.name == 'ValidationError') {

      let errorMsg = '';

      if (error?.error?.error?.errors) {

        let errors = error?.error?.error?.errors;

        Object.keys(errors).forEach(key => {
          if (errorMsg) errorMsg += '; '
          errorMsg += errors[key].message;
        })

      }

      if (errorMsg) return errorMsg;

    }

    return error.message ? error.message : error;

  }
}
