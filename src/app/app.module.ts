import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleMDEModule, SimpleMdEOptions } from 'ngx-simplemde-wrapper';

const simpleMDEConfig: SimpleMdEOptions = {
  showIcons: ['code', 'table']
} 

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    SimpleMDEModule.initialize(simpleMDEConfig)
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
