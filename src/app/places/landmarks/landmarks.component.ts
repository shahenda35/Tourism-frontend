import { Component, Input, OnInit} from '@angular/core';
import { Landmarks } from './../../models/landmarks';
import { Cities } from 'src/app/models/cities';
import { CityService } from 'src/app/services/city.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent implements OnInit{
  constructor(public cserv:CityService , private route:ActivatedRoute){}
  
   lands:Landmarks[]=[
    new Landmarks("Al-Arab Mosque" , 
                  "The Al-Arab Mosque is a beautiful mosque located in the center of Port Said. The mosque was built in the 19th century and features a distinctive Ottoman-style architecture. The mosque is open to visitors and tourists, but visitors are required to dress modestly and remove their shoes before entering." ,
                  "../assets/mosque.jpg",1),
    new Landmarks("Cleopatra's Pool" , 
                  "Cleopatra's Pool is a natural spring located near the Temple of the Oracle. The pool is believed to have been a bathing place for the Egyptian queen Cleopatra. The water in the pool is crystal clear and is said to have healing properties.",
                  "../assets/cleopatraPool.jpg",3),
    new Landmarks("LightHouse" , 
                  "This historic lighthouse was built in 1869 and is located at the entrance of the Suez Canal. The lighthouse stands at a height of 56 meters and is one of the tallest lighthouses in the world. Visitors can climb to the top of the lighthouse for panoramic views of the city and the canal.",
                  "../assets/lighthouse.jpg",1),
    new Landmarks("Shali Fortress" , 
                  "Shali Fortress is an ancient fortress located in the center of Siwa town. The fortress was built using traditional techniques using a mixture of mud, salt, and clay. The fortress was inhabited until the 20th century, but it is now mostly in ruins. Visitors can climb to the top of the fortress for panoramic views of the town.",
                  "../assets/Shali Fortress.jpg",3),
    new Landmarks("Blue Hole" , 
                  "The Blue Hole is a famous diving site located just north of Dahab. The site is known for its deep underwater cave system and is a popular spot for experienced divers. The Blue Hole is also home to a number of marine species, including sharks, rays, and turtles.",
                  "../assets/bluehole.jpg",4),
                  new Landmarks("Blue Hole" , 
                  "The Blue Hole is a famous diving site located just north of Dahab. The site is known for its deep underwater cave system and is a popular spot for experienced divers. The Blue Hole is also home to a number of marine species, including sharks, rays, and turtles.",
                  "../assets/bluehole.jpg",4),
              
  ];


  FilterLandMarks:Landmarks[]=[];
  cId: number | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      // console.log(params)
      this.cId = params['id']
      this.FilterLandMarks = this.lands.filter(i => i.cityId == this.cId )
    })
  }
 
}
