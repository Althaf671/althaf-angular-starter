import { Component, Input } from '@angular/core';
import { IMenuItemsConfig, UiIcons, UiMenu } from "../../ui";
import { INavbarItemsConfig } from '../models/navbar.model';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [
    UiIcons, 
    UiMenu, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar 
{

  @Input() public navbarItem!: INavbarItemsConfig[];

  @Input() public menuItems!: IMenuItemsConfig[];
}
