import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreguntasFComponent } from './preguntas-f/preguntas-f.component';
import { UneteComponent } from './unete/unete.component';
import { NuestraPComponent } from './nuestra-p/nuestra-p.component';
import { CintaTComponent } from './cinta-t/cinta-t.component';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { PatinaEstiloComponent } from './patina-estilo/patina-estilo.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { GruposComponent } from './grupos/grupos.component';
import { ImgGerreroComponent } from './img-gerrero/img-gerrero.component';
import { MusicaComponent } from './musica/musica.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreguntasFComponent,
    UneteComponent,
    NuestraPComponent,
    CintaTComponent,
    PatinaEstiloComponent,
    CarruselComponent,
    ProveedoresComponent,
    GruposComponent,
    ImgGerreroComponent,
    MusicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFastMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
