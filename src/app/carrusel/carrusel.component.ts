import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const gallery = document.querySelector('.grid-container-3') as HTMLElement;
      if (gallery) {
        const scrollY = window.scrollY;
        gallery.style.transform = `translateX(${scrollY * 0.3 - 330}px)`; // -200 px para iniciar más a la izquierda
      }
    });
  }

}
