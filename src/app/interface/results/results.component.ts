import { Component, OnInit, Input } from '@angular/core';
import { IAdviceSlipResult } from 'src/app/models/IAdviceSlipResult';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() queryResult!: IAdviceSlipResult;

  constructor() { }

  ngOnInit(): void {
  }

}
