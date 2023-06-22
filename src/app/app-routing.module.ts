import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { AppComponent } from './app.component';
import { LandmarksComponent } from './places/landmarks/landmarks.component';
import { CitiesComponent } from './places/cities/cities.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  {path:'signIn', component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'LandMarks' , component:LandmarksComponent},
  {path:'LandMarks/:id' , component:LandmarksComponent},
  {path:'cities',component:CitiesComponent},
  {path:'Weather',component:WeatherComponent},
  {path:'',component:HomeComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
