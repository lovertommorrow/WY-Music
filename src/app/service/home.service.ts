import { Injectable, Inject } from '@angular/core';
import { ServiceModule, API_CONFIG } from './service.module';
import { Observable } from 'rxjs';
import { Banner } from './data-type/common.types';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/internal/operators";

@Injectable({
  providedIn: ServiceModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  
  getBanners():Observable<Banner[]>{
    return this.http.get(this.uri+'banner').pipe(map((res:{banners:Banner[]})=>res.banners))
  }
}
