import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../interfaces';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent {
  @Input() video?: Video;
}
