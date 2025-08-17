import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {
    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
