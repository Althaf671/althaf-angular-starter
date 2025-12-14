import { Component, inject, Input } from '@angular/core';
import { IMetricCardConfigItems, INotificationCardConfigItems } from '../models/card.model';
import { UiIcons } from "../ui-icons/ui-icons";
import { IconProviderService } from '../../service/ui/icon.provider.sevice';
import { CalendarTooltipDirective } from "angular-calendar";

@Component({
  selector: 'app-ui-card',
  imports: [UiIcons, CalendarTooltipDirective],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard 
{
  // Depedency injection
  private iconService = inject(IconProviderService);
  protected setIcon = this.iconService.iconProvider();
  
  // Input Card items
  @Input() public cardMetricConfig?: IMetricCardConfigItems;
  @Input() public cardNotificationConfig?: INotificationCardConfigItems;
  @Input() public isFirstChild?: boolean;
  
}
