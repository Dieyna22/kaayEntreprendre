import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashEntrepreneurComponent } from './entrepreneur/dash-entrepreneur/dash-entrepreneur.component';

@NgModule({
  declarations: [
    AppComponent,
    DashEntrepreneurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
