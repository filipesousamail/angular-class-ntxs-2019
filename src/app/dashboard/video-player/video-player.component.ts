import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { VideoDataService } from 'src/app/video-data.service';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  video: Observable<Video>;
  url: Observable<SafeUrl>;

  constructor(ar: ActivatedRoute, svc: VideoDataService, sanitizer: DomSanitizer) {
    this.video = ar.queryParamMap.pipe(
      map(params => params.get('selectedVideoId')),
      filter(id => !!id),
      switchMap(id => svc.getVideo(id))
    );
    this.url = this.video.pipe(
      map(video => sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.id))
    );
  }
}
