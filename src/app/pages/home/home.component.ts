import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Banner } from 'src/app/service/data-type/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners:Banner[]
  constructor(private homeSerive:HomeService) {
    this.homeSerive.getBanners().subscribe(banners=>{
      this.banners = banners
      console.log(banners)
    })
   }

  ngOnInit() {
  }

}
