import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  BASE_URL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`)
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number){
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(updatedAlbum: Album){
    return this.client.put(`${this.BASE_URL}/albums/${updatedAlbum.id}`,updatedAlbum)
  }
  
}
