import { Component, inject, Input } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';
import { IconStyleManager } from '../../service/ui/icon-services/iconStyleManager';
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';
import { TIconSizeToken, TIconStrokeWidthToken } from '../models/icon.model';
import { SHORTENED_BUNDLED_STYLE_CONFIG, SHORTENED_CDN_STYLE_CONFIG } from '@/app/assets/icons/common/styles/shortened.style.default';


@Component({
  selector: 'app-ui-icons',
  imports: [LucideAngularModule],
  templateUrl: './ui-icons.html',
  styleUrl: './ui-icons.scss',
})
export class UiIcons 
{
  // Set icon provider
  private iconProvider = inject(IconProviderService);
  protected setProvider = this.iconProvider.setProvider();

  // Input icon name
  @Input() public name!: string;

  // Overide styles
  @Input() public overrideSize: TIconSizeToken = 'md';

  @Input() public overrideStrokeWidth: TIconStrokeWidthToken = 'md';

  @Input() public overrideColor!: string;

  // Set override styles
  private styleManager = inject(IconStyleManager);
  private setOverrideStyles = this.styleManager.convertTokens(
    this.overrideSize,
    this.overrideStrokeWidth,
    this.overrideColor
  )

  // Set icon names
  protected bundledIconName!: LucideIconData;
  protected cdnIconName!: string;

  // Set bundled icon styles 
  protected bundledIconSize = SHORTENED_BUNDLED_STYLE_CONFIG.size;
  protected bundledIconStrokeWidth = SHORTENED_BUNDLED_STYLE_CONFIG.strokeWidth;
  protected bundledIconColor = SHORTENED_BUNDLED_STYLE_CONFIG.color;

  // Set cdn icon styles
  protected cdnStyle = SHORTENED_CDN_STYLE_CONFIG;
  
}
