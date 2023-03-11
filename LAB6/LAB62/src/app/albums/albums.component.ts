import { Component,OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[]
  newAlbum: Album
  loaded: boolean
  constructor(private albumService : AlbumService){
    this.albums = []
    this.newAlbum = {} as Album
    this.loaded = true
  }

  ngOnInit():void{
    this.getAlbums()
    // this.albums = ALBUMS;
  }

  getAlbums(){
    this.loaded = false
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums
      this.loaded = true
    })
  }

  addAlbum(){
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      // this.posts.push(post);
      // album.id += 1
      album.id = this.albums.length + 1
      this.albums.unshift(album);
      console.log(this.albums.length)
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
    // this.newAlbum.id += 1
  }
  deleteAlbum(id:number){
    this.albums = this.albums.filter((x)=> x.id != id );
    this.albumService.deleteAlbum(id)
  }
  
  
}
