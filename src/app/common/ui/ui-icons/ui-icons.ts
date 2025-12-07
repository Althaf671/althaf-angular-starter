import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IIconItemsConfig } from '../models/icon.model';

@Component({
  selector: 'app-ui-icons',
  imports: [LucideAngularModule],
  templateUrl: './ui-icons.html',
  styleUrl: './ui-icons.scss',
})
export class UiIcons 
{
  @Input() public provider?: "lucideIcon" | "hugeIcon" = "lucideIcon";

  @Input() public iconClass?: string; // For hugeicons
  
  @Input() public iconItems!: IIconItemsConfig;

  @Input() public color!: string;

  @Input() public strokeW!: number;

  @Input() public size!: string | number;
  
}
