import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { LuigiComponent } from './views/luigi/luigi.component';
import { OverviewComponent } from './views/protected/overview/overview.component';
import {AutocompleteOffDirective} from "./utils/autocomplete-off.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LuigiComponent,
    OverviewComponent,AutocompleteOffDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
