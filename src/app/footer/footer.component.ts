import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentyear = 0;
  constructor() { }

  ngOnInit(): void {
    const hoy = new Date();
    this.currentyear = hoy.getFullYear();
    
  }

}
