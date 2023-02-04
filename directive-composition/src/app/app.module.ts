import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesterComponent } from './components/tester/tester.component';
import { MouseenterDirective } from './directives/mouseenter.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TesterComponent,
    MouseenterDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
