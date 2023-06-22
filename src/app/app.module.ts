import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccessModule } from './access/access.module';
import { PlacesModule } from './places/places.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';

import Swiper from 'swiper';
import { CoreModule } from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent
  ],
  imports: [



    BrowserModule,
    AppRoutingModule,
    AccessModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule,
    PlacesModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [WeatherComponent , HomeComponent]
})
export class AppModule { }
