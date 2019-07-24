import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState, getVideos } from 'src/app/state';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent {
  videos: Observable<Video[]>;

  constructor(store: Store<AppState>, router: Router, ar: ActivatedRoute) {
    this.videos = store.select(getVideos).pipe(
      tap(videos => {
        if (videos && videos.length && !ar.snapshot.queryParams.selectedVideoId) {
          router.navigate([], {
            queryParams: { selectedVideoId: videos[0].id }
          });
        }
      })
    );
  }

}
