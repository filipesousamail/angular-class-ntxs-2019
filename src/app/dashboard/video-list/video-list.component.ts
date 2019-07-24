import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  @Input() videos: Video[] = [];
  selectedVideoId: Observable<string>;

  constructor(ar: ActivatedRoute) {
    this.selectedVideoId = ar.queryParamMap.pipe(
      map(params => params.get('selectedVideoId'))
    );
  }
}
