import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attributedirective',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './attributedirective.component.html',
  styleUrl: './attributedirective.component.css'
})
export class AttributedirectiveComponent {
  applyRed=false;
}
