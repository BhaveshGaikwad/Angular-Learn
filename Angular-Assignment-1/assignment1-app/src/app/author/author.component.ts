import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorList:Array<string>;

  constructor(authorService: AuthorService) { 
    this.authorList = authorService.getAuthor();
  }

  ngOnInit(): void {
  }


}
