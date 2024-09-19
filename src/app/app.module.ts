import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { GifsModule } from "./gifs/gifs.module";
import { SharedModule } from "./shared/shared.module";
import { HomePageComponent } from "./gifs/pages/home/home-page.component";
import { SearchBoxComponent } from "./gifs/components/search-box/search-box.component";



@NgModule({

     declarations:[
     ],
imports:[
  BrowserModule,
  GifsModule,
  SharedModule,
  HomePageComponent,

],
exports:[HomePageComponent, GifsModule, SearchBoxComponent],

providers:[],
bootstrap:[]



})

export class AppModule{}
