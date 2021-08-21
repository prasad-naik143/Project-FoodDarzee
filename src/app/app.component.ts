import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodDarzee';
  img1 = [
    '../assets/Chef1.jpg',
    '../assets/Food.jpg',
    '../assets/Chef3.jpg'
  ];

  alt1 = ["Chef1",'Food','Chef3'];

  img2 = [
    '../assets/Chef2.jpg',
    '../assets/Food2.jpg',
    '../assets/Orange.jpg'
  ];

  alt2 = ["Chef1",'Food2','Orange'];


  img3 =[
    '../assets/Coffee2.jpg',
    '../assets/Coffee3.jpg',
    '../assets/Chef4.jpg'
  ];

  alt3 = ["Coffee2",'Coffee3','Chef4'];

  img4 =[
    '../assets/Passion2.jpg',
    '../assets/Passion4.jpg',
    '../assets/Passion3.jpg'
  ];

  alt4 = ["Passion2",'Passion4','Passion3'];

  img5 =[
    '../assets/Biriyani.jpg',
    '../assets/Tracy-adams3.jpg',
    '../assets/Kitchen3.jpg'
  ];

  alt5 = ["Biriyani",'Tracy-adams','Kitchen'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      transferArrayItem(event.container.data,    
                        event.previousContainer.data,
                        event.currentIndex+1,
                        event.previousIndex);
                        
    }
  }
}
