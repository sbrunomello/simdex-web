import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSidebarExpanded = false;
  public sidebarShow: boolean = false;

  handleOutsideClick() {
    console.log('Clique fora do elemento capturado!');
    this.sidebarShow = false;
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    console.log('click');
  }
}
