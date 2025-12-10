import { Component, inject, Input } from '@angular/core';
import { IIconItemsConfig, IMenuItemsConfig, UiIcons, UiMenu } from "../../ui";
import { INavbarItemsConfig } from '../models/navbar.model';
import { IconProviderService } from '../../service/ui/icon.provider.sevice';
import { Bell } from 'lucide-angular';
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
  private iconService = inject(IconProviderService);
  protected setIcon = this.iconService.iconProvider();

  // Notification and menu dropdown config
  protected readonly NotificationIcon: IIconItemsConfig = {
    icon: Bell,
    size: 1.5,
    strokeWidth: 1.5,
    color: 'var(--color-icon)'
  }

  @Input() public navbarItem!: INavbarItemsConfig[];

  @Input() public menuItems!: IMenuItemsConfig[];
}
