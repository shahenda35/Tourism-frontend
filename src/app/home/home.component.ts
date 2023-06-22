import{ AfterViewInit , Component}from '@angular/core' ; 
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  value = 0;
  ngAfterViewInit(): void {
    register();
    const swiperEl = document.querySelector('swiper-container') as any;
    const swiperParams = {
      slidesPerView: 1,
      pagination: {
        clickable: true,
      },
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    const landMarkSwiperEl = document.querySelector('#landmark-swiper') as any;

    const landMarkSwiperParams = {
      slidesPerView: 4,
      pagination: {
        clickable: true,
      },
    };
    Object.assign(landMarkSwiperEl, landMarkSwiperParams);
    swiperEl.initialize();
  }
}
