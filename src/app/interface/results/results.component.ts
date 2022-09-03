import { Component, OnInit, Input } from '@angular/core';
import { IPersonSwapi } from 'src/app/models/IPersonSwapi';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() results!: IPersonSwapi[];

  constructor() { }

  ngOnInit(): void {
  }

}
