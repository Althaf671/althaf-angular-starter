import { Component, inject, Input, OnChanges } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconStyleManager } from '../../service/ui/icon-services/iconStyleManager';
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';
import { IResolvedIconStyle, TIconSizeToken, TIconStrokeWidthToken } from '../models/icon.model';
import { IconCatalogService } from '../../service/ui/icon-services/iconCatalogService';


@Component({
  selector: 'app-ui-icons',
  imports: [LucideAngularModule],
  templateUrl: './ui-icons.html',
  styleUrl: './ui-icons.scss',
})
export class UiIcons implements OnChanges
{
  // Set icon provider
  private iconProvider = inject(IconProviderService);
  protected setProvider = this.iconProvider.setProvider();

  // Input icon name
  @Input() public name!: string;
  
  // Search for available icon in catalog
  private catalogService = inject(IconCatalogService);

  // Bundled icon props to bind
  protected bundledIconName = "";
  protected bundledIconColor = "";
  protected bundledIconStrokeWidth = "";
  protected bundledIconSize = "";

  // CDN icon to props bind
  protected cdnIconName = "";
  protected cdnStyle = "";

  // Overide styles
  @Input() public overrideSize: TIconSizeToken = 'md';

  @Input() public overrideStrokeWidth: TIconStrokeWidthToken = 'md';

  @Input() public overrideColor = 'var(--color-icon)';

  // Set override styles
  private styleManager = inject(IconStyleManager);
  private resolvedStyles!: IResolvedIconStyle; 
  public ngOnChanges(): void 
  {
    this.resolvedStyles = this.styleManager.applyOverrideStyles(
      this.overrideSize,
      this.overrideStrokeWidth,
      this.overrideColor
    )
  } 
  
}
