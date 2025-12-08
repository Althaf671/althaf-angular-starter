import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IIconItemsConfig, IIconStyleConfig } from '../models/icon.model';

@Component({
  selector: 'app-ui-icons',
  imports: [LucideAngularModule],
  templateUrl: './ui-icons.html',
  styleUrl: './ui-icons.scss',
})
export class UiIcons 
{
  @Input() public provider!: string;

  @Input() public iconClass?: string; // For hugeicons

  @Input() public iconStyle?: IIconStyleConfig = {
    'font-size':' 24px', 
    'color': 'var(--color-icon)', 
    'font-weight': '500'
  }; // For hugeicons
  
  @Input() public iconItems!: IIconItemsConfig;
  
}
