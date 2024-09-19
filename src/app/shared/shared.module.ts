import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from '../gifs/pages/home/home-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, SidebarComponent, HomePageComponent
  ],
  exports:[SidebarComponent]
})
export class SharedModule { }
