import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { PhotoGetResponse } from '../models/album';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) { }

  photos?: PhotoGetResponse;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    if (id) {
      this.albumsService.getAlbumById(id)
        .subscribe(res => {
          this.photos = res;
          console.log(res);
        })
    }
  }


}
