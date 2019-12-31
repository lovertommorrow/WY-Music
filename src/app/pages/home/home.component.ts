import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Banner, HotTag, SongSheet } from 'src/app/service/data-type/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners:Banner[]
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];
  carouselActiveIndex=0
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;
  constructor(private homeSerive:HomeService) {
    this.getBanners()
    this.getHotTags()
    this.getPerosonalSheetList()
   }

  ngOnInit() {
  }
  private getBanners(){
    this.homeSerive.getBanners().subscribe(banners=>{
      this.banners = banners
    })
  }
  private getHotTags() {
    this.homeSerive.getHotTags().subscribe(hotTags=>{
      this.hotTags = hotTags
    })
  }
  private getPerosonalSheetList() {
    this.homeSerive.getPersonalSheetList().subscribe(result=>{
      this.songSheetList = result
    })
  }
  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
