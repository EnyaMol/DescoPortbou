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
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
