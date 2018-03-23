import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MaterialDesignDemoModule } from './material-design-demo/material-design-demo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MaterialDesignDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
