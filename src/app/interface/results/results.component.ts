import { Component, OnInit, Input } from '@angular/core';
import { IAdviceSlipMessage } from 'src/app/models/IAdviceSlipMessage';
import { IAdviceSlipResult } from '../../models/IAdviceSlipResult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() queryResult!: IAdviceSlipResult;
  @Input() isResultsDirty: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
