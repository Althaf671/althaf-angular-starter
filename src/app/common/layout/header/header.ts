import { Component, inject } from '@angular/core';
import { IIconItemsConfig, UiBreadcrumbs, UiIcons } from "../../ui";
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';
import { Menu } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [UiBreadcrumbs, UiIcons],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header 
{
  private iconService = inject(IconProviderService);
  protected setIcon = this.iconService.iconProvider();

  protected readonly MenuIcons: IIconItemsConfig = {
    icon: Menu,
    size: 1,
    strokeWidth: 1,
    color: 'var(--color-icon)'
  }
}
