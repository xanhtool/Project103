import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';
import {Album} from '../../models/album';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'artist',
  templateUrl: 'app/components/artist/artist.component.html',
  styleUrls: ['app/components/artist/artist.component.css'],
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit {
  id:string;
  artist:Artist[];
  albums: Album[];;

  constructor(
    private spotifyService:SpotifyService,
    private route:ActivatedRoute
    ) {

    }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getArtist(id)
              .subscribe(artist => {
                this.artist = artist;
              })
          this.spotifyService.getAlbums(id)
              .subscribe(albums => {
                this.albums = albums.items;
              })
        })
  }

}
