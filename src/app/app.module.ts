import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatchersComponent } from './matchers/matchers.component';
import { DataComponent } from './data/data.component';
import { AsynchronousComponent } from './asynchronous/asynchronous.component';

@NgModule({
  declarations: [AppComponent, MatchersComponent, DataComponent, AsynchronousComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
