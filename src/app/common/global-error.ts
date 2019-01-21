import { ErrorHandler } from '@angular/core';

export class GlobalError implements ErrorHandler{
    handleError(error){
        alert("an unexpected error occur")
        console.log(error)
    }

}