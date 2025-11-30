import { Component, Input } from '@angular/core';
import { UiIcons } from "@/ui/index";
import { 
  AppWindow, 
  ContactRound, 
  DoorOpen, 
  FileCog, 
  Gauge, 
  Inbox, 
  Landmark, 
  ListChecks, 
  Settings, 
  SquareActivity, 
  ToolCase
} from 'lucide-angular';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SidebarService } from '../../service/layout/sidebar.service';
import { TSidebarMenuItemsConfig } from '@/layout/index';

@Component({
  selector: 'app-sidebar',
  imports: [UiIcons, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  // Sidebar icons
  readonly MenuIcons = AppWindow;
  readonly DashboardIcon = Gauge;
  readonly FinanceIcon = Landmark;
  readonly TodoIcon = ListChecks;
  readonly EmployeeIcon = ContactRound;
  readonly InboxIcon = Inbox;
  readonly ToolsIcon = ToolCase;
  readonly FileManagerIcon = FileCog;
  readonly HealthIcon = SquareActivity;
  readonly SettingIcon = Settings;
  readonly LogoutIcon = DoorOpen;

  // Toggle sidebar
  constructor(public sidebar: SidebarService) {};
  
  toggle() {
    this.sidebar.toggle();
  }

  // Sidebar header config
  @Input() portalName!: string;

  @Input() email!: string;

  // Sidebar primary menu items
  @Input() primaryMenuItems!: TSidebarMenuItemsConfig;

  // Sidebar secondary menu items
  @Input() secondaryMenuItems!: TSidebarMenuItemsConfig;

  // Sidebar third menu items
  @Input() thirdMenuItems!: TSidebarMenuItemsConfig;
  
}
