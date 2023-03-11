import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { ALBUMS } from '../fake-database';
import { Album } from '../model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  newTitle:string
  album : Album
  loaded : boolean
  constructor(private route: ActivatedRoute,private albumService: AlbumService){
    this.newTitle = ""
    this.album = {} as Album
    this.loaded = true
  }
  ngOnInit():void{
    // console.log(1)
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'))
      this.loaded = false
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album
        this.loaded = true
      })
    })
  }
  returnBack(){
    window.history.back()
  }
  updateAlbum(id:any,userId:any){
    if(this.newTitle!=""){
      const updatedAlbum:Album = {
      userId : userId,
      id : id,
      title : this.newTitle
    }
    this.albumService.updateAlbum(updatedAlbum).subscribe((updatedAlbum) => {
      this.album.title = this.newTitle
      this.loaded = true
      this.newTitle = ""
    })
    }else return
    
    
  }

}
