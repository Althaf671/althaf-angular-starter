import { Component, Input } from '@angular/core';
import { IButtonStyle } from '../models/button.model';
import { UiIcons } from "../ui-icons/ui-icons";

@Component({
  selector: 'app-ui-button',
  imports: [UiIcons],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton 
{

  @Input() public type: "button" | "submit" = "button";

  @Input() public variant: "text-icon" | "icon-only" | "text-only" = "text-only";

  @Input() public level: 
    "info" 
    | "warn" 
    | "danger" 
    | "success" 
    | "outline" 
    | "ghost" 
    = "info";

  @Input() public name!: string;

  // @Input() public icon!: IMultiIconConfig;

  @Input() public buttonStyle!: IButtonStyle;
}
