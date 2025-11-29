import { Component, signal } from '@angular/core';
import { UiIcons } from "../../../../../common/ui/ui-icons/ui-icons";
import { Bell } from 'lucide-angular';
import { Sidebar } from "../../../../../common/layout/sidebar/sidebar";
import { RouterLinkActive } from '@angular/router';
import { UiMenu } from "../../../../../common/ui/ui-menu/ui-menu";
import { MENU_CONFIG } from './common/ui-config/menu.config';


@Component({
  selector: 'app-home',
  imports: [UiIcons, Sidebar, RouterLinkActive, UiMenu],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // Header icons
  readonly NotificationIcon = Bell;

  // Menu config
  get menuItems() {
    return MENU_CONFIG;
  }

}
