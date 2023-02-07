import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '@components/components.module';

import { MainviewComponent } from '@views/mainview/mainview.component';


@NgModule({
  declarations: [
    MainviewComponent
  ],
  exports: [
    MainviewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
