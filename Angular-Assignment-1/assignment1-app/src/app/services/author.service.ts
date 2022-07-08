import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthor(){
    let arr = ["Author1","Author2","Author3"];
    return arr;
  }
}
