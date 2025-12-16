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
  protected sidebar = inject(SidebarService);


  // Sidebar icons
  protected readonly MenuIcons = { 
    icon: AppWindow, 
    strokeWidth: 1.5,
    color: 'var(--color-icon)', 
    size: 24
  };
  protected readonly LogoutIcon = { 
    icon: DoorOpen, 
    strokeWidth: 1.5,
    color: 'white', 
    size: 24
  };

  
  protected toggle(): void 
  {
    this.sidebar.toggle();
    console.log("is sidebar open: " + this.sidebar.isOpen)
  }

  // Sidebar header config
  @Input() public portalName!: string;

  @Input() public email!: string;

  // Sidebar primary menu items
  @Input() public primaryMenuItems!: TSidebarMenuItemsConfig;

  // Sidebar secondary menu items
  @Input() public secondaryMenuItems!: TSidebarMenuItemsConfig;

  // Sidebar third menu items
  @Input() public thirdMenuItems!: TSidebarMenuItemsConfig;
  
}
