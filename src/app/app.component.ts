import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CarComponent } from './car/car.component';
import { ProductComponent } from './product/product.component';
import { BankComponent } from './bank/bank.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { ProductdetComponent } from './productdet/productdet.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AttributedirectiveComponent,RouterLink,HttpClientModule,ProductdetComponent,StudentComponent,FormsModule,ShopComponent,CarComponent,BankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'application';
}
