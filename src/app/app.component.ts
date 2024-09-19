import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { GifsModule } from "./gifs/gifs.module";
import { HomePageComponent } from "./gifs/pages/home/home-page.component";
import { SearchBoxComponent } from './gifs/components/search-box/search-box.component';

@Component({
  selector: 'app-root',
  imports: [ AppComponent, RouterOutlet, SharedModule, SidebarComponent, GifsModule, HomePageComponent, SearchBoxComponent
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
