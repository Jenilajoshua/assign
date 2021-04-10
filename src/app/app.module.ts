import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftfComponent } from './leftf/leftf.component';
import { RightfComponent } from './rightf/rightf.component';
import { LeftdComponent } from './leftd/leftd.component';
import { RightdComponent } from './rightd/rightd.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftfComponent,
    RightfComponent,
    LeftdComponent,
    RightdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
