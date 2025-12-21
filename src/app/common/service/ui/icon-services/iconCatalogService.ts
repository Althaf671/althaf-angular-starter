import { IMultiProviderIconConfig } from '@/app/common/ui';
import { IIconMapConfig } from '@/assets/icons/common/index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconCatalogService 
{
  // accept input icon name
  public getIconByName(name: string): IMultiProviderIconConfig | undefined
  {
    console.log("Catalog recieved an identifier with name: ");
    console.log("Proceeding order...");
    console.debug("Icon found.");
    const result = this.availableIcons.get(name);
    return result;
  }

  /**
   * Index an icon from registries
   * @param name - icon identifier
   * @returns - true or false, depends if icon found in registry
   * @todo - create a method that will search an icon from registries
   * with @param name as reference
   */
  // UNtuk mengisi map
  private availableIcons = new Map<string, IIconMapConfig>();
  public registry(configs: IIconMapConfig[]): void
  {
    console.debug("Method registry found: " + configs);
  }

  // Need lazy load
  // getIcon => lazyLoad => getRegistered

}
