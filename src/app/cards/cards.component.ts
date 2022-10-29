import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { productList } from '../shared/productList';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  products:IProduct[]
  constructor(){
    this.products=productList
  }
  ngOnInit(): void {
  }

}
