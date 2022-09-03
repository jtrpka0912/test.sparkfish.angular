import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { mergeMap, take } from 'rxjs';
import { AdviceApiService } from 'src/app/services/adviceApi/advice-api.service';
import { IAdviceSlipMessage } from '../../models/IAdviceSlipMessage';
import { IAdviceSlipResult } from '../../models/IAdviceSlipResult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() queryResultEvent = new EventEmitter<IAdviceSlipResult>();
  @Output() queryMessageEvent = new EventEmitter<IAdviceSlipMessage>();
  @Output() isLoadingEvent = new EventEmitter<boolean>();

  searchQuery: string = '';

  constructor(
    private adviceApiService: AdviceApiService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.searchQuery) {
      console.error('You must enter a search query');
      return;
    }

    this.isLoadingEvent.emit(true);

    setTimeout(() => {
      const observableAdviceResponse = this.adviceApiService.searchAdvice(this.searchQuery);
  
      observableAdviceResponse.subscribe((res: IAdviceSlipResult | IAdviceSlipMessage) => {
        if(!(res as IAdviceSlipMessage).message) {
          this.queryResultEvent.emit(res as IAdviceSlipResult);
        } else {
          if((res as IAdviceSlipMessage).message.type === 'notice') 
            (res as IAdviceSlipMessage).message.type = 'warning';
          this.queryMessageEvent.emit(res as IAdviceSlipMessage);
        }

        this.isLoadingEvent.emit(false);
      });
    }, 1000);
  }
}
