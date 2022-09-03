import { Component } from '@angular/core';
import { IAdviceSlipMessage } from './models/IAdviceSlipMessage';
import { IAdviceSlipResult } from './models/IAdviceSlipResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test.sparkfish.angular';
  queryResult: IAdviceSlipResult | undefined;
  queryMessage: IAdviceSlipMessage | undefined;
  isResultsDirty: boolean = false;

  retrieveQueryResult(event: IAdviceSlipResult) {
    this.queryResult = event;
    this.isResultsDirty = true;
    this.queryMessage = undefined;
  }

  retrieveQueryMessage(event: IAdviceSlipMessage) {
    this.queryMessage = event;
    this.isResultsDirty = true;
    this.queryResult = undefined;
  }

  onCloseAlertHandler() {
    this.queryMessage = undefined;
  }
}
