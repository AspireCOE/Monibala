import { Component } from '@angular/core';
import { product } from './product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput:string="Electronics"
  products:product[]=[{productId:101,productName:"vivo",cost:20000,category:"mobile"},
    {productId:102,productName:"samsung",cost:60000,category:"mobile"},
    {productId:103,productName:"charger",cost:2500,category:"Electronics"},
    {productId:104,productName:"coffee",cost:20,category:"beverages"},
    
    ]

}
