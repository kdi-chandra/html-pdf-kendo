import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
