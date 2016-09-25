import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing,appRoutingProviders }  from './app.routing';


import {SpotifyService} from './services/spotify.service';

import { AppComponent } from './app.component';
import {NavBarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/pages/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';

@NgModule({
  imports: [
    BrowserModule,FormsModule,HttpModule, routing, 
   ],
  declarations: [
    AppComponent,NavBarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent
   ],
   providers: [
   appRoutingProviders,SpotifyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
