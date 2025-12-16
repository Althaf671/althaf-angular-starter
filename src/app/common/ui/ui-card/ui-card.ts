import { Component, Input } from '@angular/core';
import { IMetricCardConfigItems, INotificationCardConfigItems } from '../models/card.model';
import { UiIcons } from "../ui-icons/ui-icons";
import { CalendarTooltipDirective } from "angular-calendar";
import { UiBadge } from "../ui-badge/ui-badge";

@Component({
  selector: 'app-ui-card',
  imports: [UiIcons, CalendarTooltipDirective, UiBadge],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard 
{
  // Depedency injection

  
  // Input Card items
  @Input() public cardMetricConfig?: IMetricCardConfigItems;

  @Input() public cardNotificationConfig?: INotificationCardConfigItems;

  // @Input() public cardBadgeIconItems!: IMultiIconConfig;

  @Input() public isFirstChild?: boolean;
  
}
