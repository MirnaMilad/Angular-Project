import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isSpecial:boolean = true;
  flag:boolean = false;
  catList:{id:number , name : string}[] =[]
  constructor() { 
    this.catList =[
      {
        id:1 ,
        name :"category1"
      },
      {
        id:2 ,
        name :"category2"
      }
    ]
  }

  ngOnInit(): void {
  }

}
