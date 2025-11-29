import { Component } from '@angular/core';
import { UiIcons } from "../../ui/ui-icons/ui-icons";
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
  
}
