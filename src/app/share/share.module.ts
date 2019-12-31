import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WyUiModule } from './wy-ui/wy-ui.module';
@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    WyUiModule,
    CommonModule,
    
  ],
  exports:[
    NgZorroAntdModule,
    FormsModule,
    WyUiModule,
    CommonModule,
  ]
})
export class ShareModule { }
