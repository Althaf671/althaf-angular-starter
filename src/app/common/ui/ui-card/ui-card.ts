import { Component, Input } from '@angular/core';
import { IMetricCardConfigItems, INotificationCardConfigItems } from '../models/card.model';
import { UiIcons } from "../ui-icons/ui-icons";

@Component({
  selector: 'app-ui-card',
  imports: [UiIcons],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard 
{
  // Input Card items
  @Input() cardMetricConfig?: IMetricCardConfigItems;
  @Input() cardNotificationConfig?: INotificationCardConfigItems;
  
}
