import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';
import {AlbumComponent} from './components/album/album.component';


const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  {path:'artist/:id', component:ArtistComponent},
    {path:'album/:id', component:AlbumComponent}
];


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
