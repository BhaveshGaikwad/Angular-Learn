import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { CustomTitlePipePipe } from './custom-pipes/custom-title-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasingComponent,
    CustomTitlePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
