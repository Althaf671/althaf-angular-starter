import { Component, inject, Input, OnChanges } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { IconStyleManager } from '../../service/ui/icon-services/iconStyleManager';
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';
import { IResolvedIconStyle, TIconSizeToken, TIconStrokeWidthToken } from '../models/icon.model';
import { IconCatalogService } from '../../service/ui/icon-services/iconCatalogService';
import { SYS_ADMIN_ICON_REGISTRY } from '@/app/assets/icons/registries';


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
  private iconConfig = this.catalogService.getIconByName(this.name);

  // Bundled icon props to bind
  protected bundledIconImage = this.iconConfig?.provider.bundledIcon.icon;
  protected bundledIconColor = this.iconConfig?.provider.bundledIcon.style.color;
  protected bundledIconStrokeWidth = this.iconConfig?.provider.bundledIcon.style.strokeWidth;
  protected bundledIconSize = this.iconConfig?.provider.bundledIcon.style.size;

  // CDN icon to props bind
  protected cdnIconName = this.iconConfig?.provider.cdnIcon.icon;
  protected cdnStyle = this.iconConfig?.provider.cdnIcon.style;

  public ngOnInit(): void 
  {
    this.catalogService.registry(SYS_ADMIN_ICON_REGISTRY.flat())
  }

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
