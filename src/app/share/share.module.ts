import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    NzIconModule,
    CommonModule
  ],
  exports:[
    NgZorroAntdModule,
    FormsModule,
    NzIconModule,
    CommonModule
  ]
})
export class ShareModule { }
