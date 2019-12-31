import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SongSheet } from 'src/app/service/data-type/common.types';

@Component({
  selector: 'app-single-sheet',
  templateUrl: './single-sheet.component.html',
  styleUrls: ['./single-sheet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSheetComponent implements OnInit {
  @Input() sheet: SongSheet;
  @Output() onPlay = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  get coverImg(): string {
    return this.sheet.picUrl || this.sheet.coverImgUrl;
  }
}
