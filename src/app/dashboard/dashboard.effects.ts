import { Injectable } from '@angular/core';
import { Actions, OnInitEffects, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { initializeVideos, videoListArrived } from '../state';
import { VideoDataService } from '../video-data.service';

@Injectable()
export class DashboardEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly svc: VideoDataService
  ) {
  }

  init$ = createEffect(() => this.actions$
    .pipe(
      ofType(initializeVideos),
      switchMap(() => this.svc.load()),
      map(videos => videoListArrived({ videos }))
    )
  );

  // a special hook to define what action should occur at initialization
  // in class, I showed ROOT_EFFECTS_INIT, which is an older way
  ngrxOnInitEffects(): Action {
    return initializeVideos();
  }
}
