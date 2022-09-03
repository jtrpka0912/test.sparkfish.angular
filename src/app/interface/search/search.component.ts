import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.searchQuery) {
      console.error('You must enter a search query');
      return;
    }

    console.info('You entered: ', this.searchQuery);
  }
}
