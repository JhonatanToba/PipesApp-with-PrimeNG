import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

/* Configuración del local de la app */
import localeKo from "@angular/common/locales/ko";
import localeJa from "@angular/common/locales/ja";


import { registerLocaleData } from "@angular/common";

registerLocaleData( localeJa );
registerLocaleData( localeKo );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    /* Cambio de idioma de manera global
    {
      provide: LOCALE_ID, useValue: 'ja'
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
