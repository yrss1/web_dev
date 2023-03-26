import { Component, OnInit } from '@angular/core';
import { Album } from "../models";
import { ALBUMS } from "../fake-db";
import { AlbumService } from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  newAlbum: Album;
  loaded: boolean;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.newAlbum = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    // this.albums = AlbumS;
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  addAlbum() {
    this.loaded = false;
    this.albumService.addAlbum(this.newAlbum).subscribe((album) => {
      // this.albums.push(album);
      this.albums.unshift(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }
  // deletePost(id: number){
  //   this.albumService.deleteAlbum(id).subscribe()
  // }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((response: Album) => {
      this.albums = this.albums.filter(a => a.id != id);
    })
  }

  //  CURD -> CREATE, UPDATE, READ, DELETE

}
