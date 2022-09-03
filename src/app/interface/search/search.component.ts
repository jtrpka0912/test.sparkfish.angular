import { Component, OnInit } from '@angular/core';

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

  /**
   * @function onSubmit
   * @description Submit a query to the API to retrieve results.
   * @param query 
   */
  onSubmit() {
    if(!this.searchQuery) {
      console.error('You must enter a search query');
      return;
    }

    console.info('You entered: ', this.searchQuery);
  }
}
