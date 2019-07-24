import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Video } from './dashboard/interfaces';

const apiURL = 'https://api.angularbootcamp.com/';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) { }

  load() {
    const url = apiURL + 'videos';
    return this.http.get<Video[]>(url).pipe(
      map(videos => {
        return videos
          .filter(video => video.title.startsWith('Angular'))
          .map(video => {
            return { ...video, title: video.title.toUpperCase() };
          });
      })
    );
  }

  getVideo(id: string) {
    const url = apiURL + 'videos/' + id;
    return this.http.get<Video>(url);
  }
}
