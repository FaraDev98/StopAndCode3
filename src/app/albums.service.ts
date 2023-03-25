import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumSearchResponse, PhotoGetResponse } from './models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumSearchResponse> {
    return this.http.get<AlbumSearchResponse>("https://jsonplaceholder.typicode.com/albums")
  }

  getAlbumById(id: string): Observable<PhotoGetResponse> {
    return this.http.get<PhotoGetResponse>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }

}
