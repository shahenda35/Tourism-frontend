import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{
  WeatherData:any;

  ngOnInit(): void {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(Response=>Response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay=(currentDate.getTime()<sunsetTime.getTime());
    this.WeatherData.temp_celcius=(this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min=(this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max=(this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like=(this.WeatherData.main.feels_like - 273.15).toFixed(0);
    console.log(currentDate)
  }

}
