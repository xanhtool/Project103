import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'album',
  templateUrl: 'app/components/album/album.component.html',
  styleUrls: ['app/components/album/album.component.css'],
  providers:[SpotifyService]
})
export class AlbumComponent implements OnInit {
  id:string;
  album:Album[];

  constructor(
    private spotifyService:SpotifyService,
    private route:ActivatedRoute
  ) {  }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getAlbum(id)
              .subscribe(album => {
                this.album = album;
              })
        })
  }
}
