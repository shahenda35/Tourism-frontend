import { Component, OnInit } from '@angular/core';
import { Landmarks } from './../../models/landmarks';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { Cities } from 'src/app/models/cities';
import { CityService } from 'src/app/services/city.service';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  constructor(public c:CityService){}
  cities:Cities[]=[];

  ngOnInit(): void {
    this.cities = this.c.getAllCities();
  }
}
