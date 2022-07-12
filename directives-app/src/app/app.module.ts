import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfDirectivesComponent } from './ng-if-directives/ng-if-directives.component';
import { NgSwitchDirectivesComponent } from './ng-switch-directives/ng-switch-directives.component';
import { NgForDirectivesComponent } from './ng-for-directives/ng-for-directives.component';
import { InputFormatDirective } from './custom-directive/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgIfDirectivesComponent,
    NgSwitchDirectivesComponent,
    NgForDirectivesComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
