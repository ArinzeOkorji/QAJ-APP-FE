import { PageEvent } from '@angular/material';

export class Helper {

}
export class SimpleError {
  constructor(errorNumber?: number, message?: string, userFriendlyMessage?: string) {
    this.errorNumber = errorNumber;
    this.message = message;
    this.userFriendlyMessage = userFriendlyMessage;
  }
  errorNumber: number;
  message: string;
  userFriendlyMessage: string;
}
export class PaginatorConfigurable {
  // MatPaginator Inputs
  length: number;
  pageSize: number;
  pageSizeOptions: number[];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(length: number= 100, pageSize: number= 10, pageSizeOptions: number[]= [5, 10, 25, 100]) {
    this.length = length;
    this.pageSize = pageSize;
    this.pageSizeOptions = pageSizeOptions;
    this.pageEvent = new PageEvent();
    this.pageEvent.pageIndex = 0;
    this.pageEvent.pageSize = pageSize;
    this.pageEvent.length = length;
   }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
