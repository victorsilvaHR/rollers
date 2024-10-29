import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { FooterComponent } from './footer/footer.component';
import { PreguntasFComponent } from './preguntas-f/preguntas-f.component';
import { UneteComponent } from './unete/unete.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    FooterComponent,
    PreguntasFComponent,
    UneteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
