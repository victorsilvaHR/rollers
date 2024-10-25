import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {
  
  isNavbarVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
