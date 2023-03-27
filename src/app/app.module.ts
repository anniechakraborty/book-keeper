import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingMoudle } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarHeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingMoudle
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
