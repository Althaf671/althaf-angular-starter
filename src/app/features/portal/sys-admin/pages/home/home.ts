import { Component } from '@angular/core';
import { Bell } from 'lucide-angular';
import { UiIcons, UiMenu, UiBreadcrumbs } from "@/ui/index";
import { Sidebar } from "@/layout/sidebar/sidebar";
import { MENU_CONFIG } from './common/ui-config/menu.config';
import { 
  SIDEBAR_HEADER_ITEMS, 
  SIDEBAR_PRIMARY_MENU_ITEMS, 
  SIDEBAR_SECONDARY_MENU_ITEMS, 
  SIDEBAR_THIRD_MENU_ITEMS
} from '../../common/service/ui-config/sidebar.config';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [UiIcons, Sidebar, UiMenu, UiBreadcrumbs, RouterLink, RouterOutlet],
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

  // Sidebar config
  get sidebarHeaderItems() {
    return SIDEBAR_HEADER_ITEMS;
  }
  get sidebarPrimaryMenuItems() {
    return SIDEBAR_PRIMARY_MENU_ITEMS;
  }
  get sidebarSecondaryMenuItems() {
    return SIDEBAR_SECONDARY_MENU_ITEMS;
  }
  get sidebarThirdMenuItems() {
    return SIDEBAR_THIRD_MENU_ITEMS;
  }

}
