import { IProduct } from '../../models/iproduct';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cards:string[]=[
    "../../assets//pexels-photo-904616.jpeg",
    "../../assets/pexels-photo-1752806.webp",
    "../../assets/pexels-photo-317377.jpeg"
  ];

  @Input() productChild:IProduct
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
