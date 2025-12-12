import { Component, inject, Input } from '@angular/core';
import { IButtonItemsConfig, IButtonStyle } from '../models/button.model';
import { UiIcons } from "../ui-icons/ui-icons";
import { IconProviderService } from '../../service/ui/icon.provider.sevice';

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

  @Input() public buttonItems!: IButtonItemsConfig;
  @Input() public type: "default" | "submit" = "default";
  @Input() public buttonStyle?: IButtonStyle = {
    width: '100px',
    height: '30px',
    bgColor: 'var(--color-primary)',
    color: 'white'
  }
}
