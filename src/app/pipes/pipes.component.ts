import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../cube.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,CubePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  name="ram";
  day=new Date();
  joindate=new Date();
  amount=1239;
  number=7287;
  heading="pipe demonstration"
  value="ram";
  

}
