import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {

  isNavbarVisible: boolean = false;

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

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

}
