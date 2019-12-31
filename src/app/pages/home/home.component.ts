import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Banner } from 'src/app/service/data-type/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners:Banner[]
  carouselActiveIndex=0
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;
  constructor(private homeSerive:HomeService) {
    this.homeSerive.getBanners().subscribe(banners=>{
      this.banners = banners
    })
   }

  ngOnInit() {
  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
