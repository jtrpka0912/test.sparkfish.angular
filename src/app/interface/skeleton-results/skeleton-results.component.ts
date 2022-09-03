import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-results',
  templateUrl: './skeleton-results.component.html',
  styleUrls: ['./skeleton-results.component.scss']
})
export class SkeletonResultsComponent implements OnInit {
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
