import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  shopGallery: string[];
  imgSrc: string = '../../assets/pexels-photo-1752806.webp';
  shopDesc: string =
    'Some quick example text to build on the card title and make up the bulk of the card';

  constructor() {
    this.shopGallery = [
      '../../assets/pexels-photo-317377.jpeg',
      '../../assets/pexels-photo-904616.jpeg',
      '../../assets/pexels-photo-1752806.webp',
    ];
  }

  ngOnInit(): void {}
  i: number = 0;
  showGallery(event: any) {
    event?.preventDefault();
    if (this.i == this.shopGallery.length) {
      this.i = 0;
    }
    this.imgSrc = this.shopGallery[this.i++];
  }
}
