import { Component, Input } from '@angular/core';
import {
  CommonModule,
  ImageLoaderConfig,
  IMAGE_LOADER,
  NgOptimizedImage,
} from '@angular/common';
import { PictureModel } from '../app.component';

@Component({
  selector: 'app-picture-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `./assets/${config.src}`;
      },
    },
  ],
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css'],
})
export class PictureItemComponent {
  @Input() pictureItem!: PictureModel;
}
