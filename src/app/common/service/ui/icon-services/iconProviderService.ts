import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconProviderService 
{

  // Provider manager
  // toggle controller = var: string
  // Inject all parent that called app-icon with 
  // set [provider]="toggle logic with tenary (?) operator" to all app-icon tag
  // phospor - lucide - huge - font awosme - ionic - box icons - iconoir
  // style: outline - and more

  // private setProvider(): void 
  // {

  // }

  // public iconProvider(): string
  // {
  //   console.log("Icon provider = " + this.provider);
  //   return this.provider;
  // }

  private provider!: string;
  public setProvider(): string
  {
    console.log("Current provider is: " + this.provider);
    return this.provider;
  }

}
