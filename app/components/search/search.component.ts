import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/artist';


@Component({
  selector: 'search',
  templateUrl: 'app/components/search/search.component.html',
  providers:[SpotifyService]
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];
  constructor(private spotifyService:SpotifyService) {

  }
  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr)
        .subscribe(res => {
          this.searchRes = res.artists.items;

        })
  }
}
