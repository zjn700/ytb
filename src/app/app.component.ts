import { Component } from '@angular/core';
import { Video } from './model/video';

@Component({
  selector: 'lng-root',
  template: `
  <!-- <h1>rim</h1> -->
  <div style="text-align:center">
  <h1>
    Angular YouTube Video Player Demo
  </h1>
</div>
<h2>Select a Video</h2>
<ul>
  <li *ngFor="let video of videoList">
    <!-- <h2><a href="#" >{{video.title}}</a></h2> -->
    <h2><a href="#" (click)="selectVideo(video)">{{video.title}}</a></h2>
  </li>
</ul>
<lng-video-player [videoId]="currentVideoId"></lng-video-player>
  `,
  styles: []
})
// ... other imports
export class AppComponent {
  videoList: Video[] = [
    {
      title: '[Debugging] Expression has changed after it was checked',
      link: 'https://www.youtube.com/watch?v=O47uUnJjbJc'
    },
    {
      title: '[Debugging] The pipe {name} could not be found',
      link: 'https://www.youtube.com/watch?v=maI2u6Sxk9M'
    }
  ];

 currentVideoId: string | undefined = undefined;

  selectVideo(video: Video) {
    if (video) {
     const params: any = new URL(video.link).searchParams;
     if (params != null) {
        this.currentVideoId = params.get('v');
     }
    }
  }
}


// }