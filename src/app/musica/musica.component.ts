import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.scss']
})
export class MusicaComponent implements OnInit {

  isPlaying: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Cambia el estado de reproducción
  toggleAudio(): void {
    const audioPlayer = <HTMLAudioElement>document.querySelector('audio');
    
    if (this.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    
    this.isPlaying = !this.isPlaying;
  }

}
