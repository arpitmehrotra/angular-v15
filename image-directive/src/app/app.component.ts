import { Component } from '@angular/core';

export interface PictureModel {
  id: number;
  url: string;
}

const pictures = [
  { id: 1, url: 'image-1.jpg' },
  { id: 2, url: 'image-2.jpg' },
  { id: 3, url: 'image-3.jpg' },
  { id: 4, url: 'image-4.jpg' },
  { id: 5, url: 'image-5.jpg' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pictures!: PictureModel[];

  ngOnInit(): void {
    this.pictures = pictures;
  }
}
