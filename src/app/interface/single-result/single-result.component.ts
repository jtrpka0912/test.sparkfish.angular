import { Component, OnInit, Input } from '@angular/core';
import { IAdviceSlip } from 'src/app/models/IAdviceSlip';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() adviceSlip!: IAdviceSlip;

  constructor() { }

  ngOnInit(): void {
  }

}
