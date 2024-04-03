import { NgModule } from '@angular/core';

import { CardModule } from "primeng/card";
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
/* import { MenuModule } from 'primeng/menu'; */

@NgModule({
  exports: [
    //MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
