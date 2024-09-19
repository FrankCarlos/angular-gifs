import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
