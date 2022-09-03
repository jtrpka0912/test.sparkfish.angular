import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IAdviceSlipResult } from 'src/app/models/IAdviceSlipResult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() queryResultEvent = new EventEmitter<IAdviceSlipResult>();

  searchQuery: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.searchQuery) {
      console.error('You must enter a search query');
      return;
    }

    this.queryResultEvent.emit({
      total_results: '2',
      query: this.searchQuery,
      slips: [
        {id: '1', advice: 'This is some advice.', date: '2022-09-03' },
        {id: '2', advice: 'Lorem ipsum', date: '1970-01-01'}
      ]
    });
  }
}
