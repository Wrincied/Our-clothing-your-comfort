import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public sliderItems: Array<{name:string, price:number}> =[
    {
      name: 'T-shirt',
      price : 5,
    },
    {
      name: 'Hat',
      price : 59,
    },
    {
      name: 'Hoody',
      price : 54,
    },
    {
      name: 'Trainers',
      price : 50,
    },
    {
      name: 'Shoes',
      price : 750,
    }
  ]
}
