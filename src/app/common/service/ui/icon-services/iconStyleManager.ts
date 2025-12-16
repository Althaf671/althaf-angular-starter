// import { IIConStyleDefaultConfig, IMultiProviderIconStyleConfig } from '@/app/common/ui/models/icon.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconStyleManager 
{

  // Tempat manage override default icon style dengan direct input di parent template
  // Menerima input dari app-ui-icon
  // Overide ICON_STYLE_DEFAULT
  // private overrideStyles: IMultiProviderIconStyleConfig = {};

  public convertTokens(
    overrideSize: string,
    overrideStrokeWidth: string,
    overrideColor: string,
  ): void
  {
    // This method will receive 3 vars
    console.log("Overrided size is: " + overrideSize); // it should return token 'sm' | 'md' and other
    console.log("Overrided size is: " + overrideStrokeWidth); // it should the same as above
    console.log("Overrided size is: " + overrideColor); // it should return string color
  }

  // ohh keren, tapi aku juga punya transform styles nahh gini, convert token method kan convert token 
  // jadi number nah karena ada bundled dan cdn icons yg punya different approach buat styling, e.g lucide = size; number, 
  // huge/other cdn = style: font-size number...jadi token akan ditukar jadi 2 atau 20px so wdyt? atauuu, method convert token itu 
  // convert token (eg 'sm') => 2 & 20px..? - option 2.

  // applyOverrides()
  // getDefaultStyles()

  // public ngOnInit(iconStyle: IMultiProviderIconStyleConfig): void 
  // {
  
  // }

// 'thin'    → strokeWidth: 1   | font-weight: 300
// 'regular' → strokeWidth: 1.5 | font-weight: 400
// 'medium'  → strokeWidth: 2   | font-weight: 500
// 'bold'    → strokeWidth: 2.5 | font-weight: 600
// 'bolder'  → strokeWidth: 3   | font-weight: 700
}
