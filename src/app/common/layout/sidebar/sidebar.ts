import { Component, Input, inject } from '@angular/core';
import { UiIcons } from "@/ui/index";
import { AppWindow, DoorOpen, } from 'lucide-angular';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SidebarService } from '../../service/layout/sidebar.service';
import { TSidebarMenuItemsConfig } from '@/layout/index';

@Component({
  selector: 'app-sidebar',
  imports: [UiIcons, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar 
{
  sidebar = inject(SidebarService);


  // Sidebar icons
  readonly MenuIcons = AppWindow;
  readonly LogoutIcon = DoorOpen;
  
  toggle() 
  {
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
