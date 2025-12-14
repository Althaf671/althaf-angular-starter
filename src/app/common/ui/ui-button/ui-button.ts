import { Component, inject, Input } from '@angular/core';
import { IButtonStyle } from '../models/button.model';
import { UiIcons } from "../ui-icons/ui-icons";
import { IconProviderService } from '../../service/ui/icon.provider.sevice';
import { IMultiIconConfig } from '../models/icon.model';

@Component({
  selector: 'app-ui-button',
  imports: [UiIcons],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton 
{
  private iconService = inject(IconProviderService);
  protected setIcon = this.iconService.iconProvider();

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

  @Input() public icon!: IMultiIconConfig;

  @Input() public buttonStyle!: IButtonStyle;
}
