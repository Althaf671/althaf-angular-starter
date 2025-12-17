import { ICON_PROVIDERS } from '@/app/common/ui/models/icon.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconProviderService 
{
  private getProvider = ICON_PROVIDERS[1]; 

  private provider = this.getProvider;
  public setProvider(): string
  {
    console.log("Current provider is: " + this.provider);
    return this.provider;
  }

}
