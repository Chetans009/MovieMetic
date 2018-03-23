import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: [MaterialDemoComponent],
  exports : [MaterialDemoComponent]
})
export class MaterialDesignDemoModule { }
