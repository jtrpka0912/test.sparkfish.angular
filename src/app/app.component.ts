import { Component } from '@angular/core';
import { IPersonSwapi } from './models/IPersonSwapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test.sparkfish.angular';
  
  sampleResults: IPersonSwapi[] = [
    {
      name: 'Han Solo',
      gender: 'Male',
      hair_color: 'Brown',
      eye_color: 'Hazel',
      mass: '100',
      height: '109'
    },
    {
      name: 'Darth Vader',
      gender: 'Male',
      hair_color: 'N/A',
      eye_color: 'Red',
      mass: '200',
      height: '120'
    }
  ];
}
