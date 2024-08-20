import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studentName:String="moni";
  studentMark:number=448;
  joindate:Date=new Date();
  message:String="This is one way binding";
  fontColor:String="blue";
  displayMessage(){
    console.log('Button clicked');
  }

  

}
