import { Component } from '@angular/core';
import { IPersonSwapi } from './models/IPersonSwapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test.sparkfish.angular';
  
  samplePersonSwapi: IPersonSwapi = {
    name: 'Han Solo',
    gender: 'Male',
    hair_color: 'Brown',
    eye_color: 'Hazel',
    mass: '100',
    height: '109'
  };
}
