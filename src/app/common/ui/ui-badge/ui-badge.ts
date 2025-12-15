import { Component, inject, Input } from '@angular/core';
import { UiIcons } from "../ui-icons/ui-icons";
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';
import { IMultiIconConfig } from '../models/icon.model';
import { ArchiveRestore } from 'lucide-angular';

@Component({
  selector: 'app-ui-badge',
  imports: [UiIcons],
  templateUrl: './ui-badge.html',
  styleUrl: './ui-badge.scss',
})
export class UiBadge 
{
  private iconService = inject(IconProviderService);
  protected setIcon = this.iconService.iconProvider();

  @Input() public iconItems: IMultiIconConfig = {
    icons: {
      iconLucide: { 
        icon: ArchiveRestore, 
        color: 'var(--color-icon)', 
        size: 24, 
        strokeWidth: 2.25 
      },
      iconHuge: { 
        icon: 'hgi hgi-stroke hgi-id',
        style: {
          'font-size':' 23px', 
          'color': 'var(--color-primary)', 
          'font-weight': '500'
        } 
      }
    }
  };
}
