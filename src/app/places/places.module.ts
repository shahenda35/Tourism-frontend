import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandmarksComponent } from './landmarks/landmarks.component';
// import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';


@NgModule({
  declarations: [
    LandmarksComponent,
    CitiesComponent,
  ],
  imports: [
  
    CommonModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    FormsModule
  ],
  exports:[LandmarksComponent,CitiesComponent]
})
export class PlacesModule { }
