import { Component, Input } from '@angular/core';
import { UiIcons } from "../ui-icons/ui-icons";

@Component({
  selector: 'app-ui-badge',
  imports: [UiIcons],
  templateUrl: './ui-badge.html',
  styleUrl: './ui-badge.scss',
})
export class UiBadge 
{

  @Input() public iconItems!: unknown;

}
