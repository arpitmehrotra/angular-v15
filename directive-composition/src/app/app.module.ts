import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './components/tester/tester.component';
import { MouseenterDirective } from './directives/mouseenter.directive';
import { EventDirective } from './directives/event.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesterComponent,
    MouseenterDirective,
    HttpClientModule,
    EventDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
