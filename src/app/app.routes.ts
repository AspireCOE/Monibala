import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { BankComponent } from './bank/bank.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { CarComponent } from './car/car.component';
import { StudentComponent } from './student/student.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { ProductdetComponent } from './productdet/productdet.component';

export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent

    },
    {
        path:"bank",
        component:BankComponent
    },
    {
        path:"product",
        component:ProductdetComponent
    },
    {
        path:"pipes",
        component:PipesComponent
    },
    {
        path:"car",
        component:CarComponent,
        
            children:[
                {
                    path:"bank",
                    component:BankComponent

                },
                {
                    path:"student",
                    component:StudentComponent

                },
            ],
    },
    {
         path: "shop",   redirectTo: '/student', pathMatch: 'full' ,
    },
    {
        path:"**",
        component:StudentComponent
    }

];
