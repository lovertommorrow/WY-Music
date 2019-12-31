import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  exports:[
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ]
})
export class ShareModule { }
