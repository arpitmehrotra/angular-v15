import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureItemComponent } from './picture-item/picture-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PictureItemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
