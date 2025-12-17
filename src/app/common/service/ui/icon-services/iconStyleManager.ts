import { ICON_STYLE_DEFAULT } from '@/app/assets/icons/common/styles/icon.style.default';
import { 
  TIconSizeToken, 
  TIconStrokeWidthToken } from '@/app/common/ui';
import { 
  BUNDLED_ICON_SIZE_TOKEN_VALUE, 
  BUNDLED_ICON_STROKE_WIDTH_TOKEN_VALUE, 
  CDN_ICON_SIZE_TOKEN_VALUE,
  CDN_ICON_STROKEWIDTH_TOKEN_VALUE
} from '@/app/common/ui/models/icon.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconStyleManager 
{
  
  public applyOverrideStyles(
    overrideSize: TIconSizeToken,
    overrideStrokeWidth: TIconStrokeWidthToken,
    overrideColor: string,
  ): unknown
  {
    const applyFinalSize = overrideSize;
    const applyFinalStrokeWidth = overrideStrokeWidth;
    const applyFinalColor = overrideColor;


    return 
  }

  // This method will convert tokens into number(for bundled) or string(for CDN) icon
  public convertTokens(
    overrideSize: TIconSizeToken,
    overrideStrokeWidth: TIconStrokeWidthToken,
    overrideColor: string,
  ): unknown
  {
    // This method will receive 3 vars
    console.log("Overrided size is: " + overrideSize); // it should return token 'sm' | 'md' and other
    console.log("Overrided stroke width is: " + overrideStrokeWidth); // it should the same as above
    console.log("Overrided color is: " + overrideColor); // it should return string color

    const overrideStyles = {
      bundledIcon: {
        size: BUNDLED_ICON_SIZE_TOKEN_VALUE[overrideSize],
        strokeWidth: BUNDLED_ICON_STROKE_WIDTH_TOKEN_VALUE[overrideStrokeWidth],
        color: overrideColor
      },
      cdnIcon: {
        'font-size': CDN_ICON_SIZE_TOKEN_VALUE[overrideSize],
        'font-weight': CDN_ICON_STROKEWIDTH_TOKEN_VALUE[overrideStrokeWidth],
        color: overrideColor
      }
    } as const

    console.debug("Overrided styles is: " + overrideColor); // it should return the all override actuall values

    return overrideStyles;
  }

}
