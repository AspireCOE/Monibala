import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-productdet',
  standalone: true,
  imports: [],
  templateUrl: './productdet.component.html',
  styleUrl: './productdet.component.css'
})
export class ProductdetComponent {
  productdata:any
  constructor(private service:ProductService){}
  ngOnInit(){
    this.service.getAllProduct().subscribe((data)=>{
      console.log(data)
    })
  }

}
