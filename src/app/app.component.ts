import { Component } from '@angular/core';
import { IAdviceSlipResult } from './models/IAdviceSlipResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test.sparkfish.angular';
  queryResult!: IAdviceSlipResult;
  isResultsDirty: boolean = false;

  retrieveQueryResult(event: IAdviceSlipResult) {
    this.queryResult = event;
    this.isResultsDirty = true;
  }
}
