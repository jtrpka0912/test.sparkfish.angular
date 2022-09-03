import { Component, OnInit, Input } from '@angular/core';
import { IPersonSwapi } from 'src/app/models/IPersonSwapi';

@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.scss']
})
export class SingleResultComponent implements OnInit {

  @Input() personSwapi!: IPersonSwapi;

  constructor() { }

  ngOnInit(): void {
  }

}
