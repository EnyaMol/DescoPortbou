import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RutesComponent } from './rutes/rutes.component';
import { RutagranComponent } from './rutagran/rutagran.component';
import { PuntsComponent } from './punts/punts.component';
import { PuntsgranComponent } from './puntsgran/puntsgran.component';
import { AccesComponent } from './acces/acces.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RutesComponent,
    RutagranComponent,
    PuntsComponent,
    PuntsgranComponent,
    AccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
