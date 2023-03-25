import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album, AlbumSearchResponse } from '../models/album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumsService: AlbumsService) { }

  albums?: AlbumSearchResponse;

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumsService.getAlbums()
      .subscribe(res => {
        this.albums = res
      })
  }

}


