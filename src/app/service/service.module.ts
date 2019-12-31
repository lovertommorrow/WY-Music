import { NgModule, InjectionToken } from '@angular/core';

export const API_CONFIG = new InjectionToken('apiConfigToken')

@NgModule({
  declarations: [],
  imports: [
    
  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://localhost:3001/'}
  ]
})
export class ServiceModule { }
