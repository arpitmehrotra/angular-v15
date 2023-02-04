import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './components/tester/tester.component';
import { BoldDirective } from './directives/bold.directive';
import { UnderlineDirective } from './directives/underline.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesterComponent,
    BoldDirective,
    UnderlineDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
