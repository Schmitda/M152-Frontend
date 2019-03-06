import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  images: string[] = [];

  constructor() {
    this.images.push("https://wallpaperplay.com/walls/full/2/1/1/136291.jpg");
  }

  ngOnInit() {
  }

}

