import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './product';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  BASE_URL_PHOTOS: string = 'https://jsonplaceholder.typicode.com/albums/'

  constructor(private client: HttpClient) { }

  getPhotos(id: number): Observable<Photo[]>{
    console.log(`${this.BASE_URL_PHOTOS}${id}/photos`)
    return this.client.get<Photo[]>(`${this.BASE_URL_PHOTOS}${id}/photos`)
  }

  getPhoto(id:number): Observable<Photo>{
    return this.client.get<Photo>(`${this.BASE_URL_PHOTOS}/photos/${id}`)
  }
}
