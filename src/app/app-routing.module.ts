import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImageGalleryComponent} from './image-gallery/image-gallery.component';
import {VideoGalleryComponent} from './video-gallery/video-gallery.component';
import {AudioListComponent} from './audio-list/audio-list.component';
import {ChatComponent} from './chat/chat.component';
import {WebchatComponent} from './webchat/webchat.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gallery/image',
    component: ImageGalleryComponent
  },
  {
    path: 'gallery/video',
    component: VideoGalleryComponent
  },
  {
    path: 'gallery/audio',
    component: AudioListComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'webchat',
    component: WebchatComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
