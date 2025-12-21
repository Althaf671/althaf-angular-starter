import { ICON_STYLE_DEFAULT } from '@/assets/icons/common/index';
import { 
  TIconSizeToken, 
  TIconStrokeWidthToken,
  IMultiProviderIconStyleConfig,
  IResolvedIconStyle
} from '@/ui/index';
import { 
  BUNDLED_ICON_SIZE_TOKEN_VALUE, 
  BUNDLED_ICON_STROKE_WIDTH_TOKEN_VALUE, 
  CDN_ICON_SIZE_TOKEN_VALUE,
  CDN_ICON_STROKEWIDTH_TOKEN_VALUE,
} from '@/assets/icons/common/index';
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
  ): IResolvedIconStyle
  {
    // Execute convertTokens method to convert all payload tokens
    const resolved = this.convertTokens(
      overrideSize,
      overrideStrokeWidth,
      overrideColor
    )
    console.debug("Converted token: " + resolved);

    /**
     * New object with structure of ICON_STYLE_DEFAULT BUT IT'S not
     * ICON_STYLE_DEFAULT from icon.style.default.ts, this is an entirely
     * new object.
     * 
     * The copy of ICON_STYLE_DEFAULT object properties overrided by new props
     * below it.
     *  */ 
    const finalStyles: IResolvedIconStyle = {
      ...ICON_STYLE_DEFAULT,
      colorDefault: resolved.provider.bundledIcon.color,
      lucideStyleDefault: {
        ...ICON_STYLE_DEFAULT.lucideStyleDefault,
        size: resolved.provider.bundledIcon.size,
        strokeWidth: resolved.provider.bundledIcon.strokeWidth,
      },
      hugeStyleDefault: {
        ...ICON_STYLE_DEFAULT.hugeStyleDefault,
        'font-size': resolved.provider.cdnIcon['font-size'],
        'font-weight': resolved.provider.cdnIcon['font-weight'],
      }
    }

    return finalStyles;
  }

  // This method will convert tokens into number(for bundled) or string(for CDN) icon
  public convertTokens(
    overrideSize: TIconSizeToken,
    overrideStrokeWidth: TIconStrokeWidthToken,
    overrideColor: string,
  ): IMultiProviderIconStyleConfig
  {
    // This method will receive 3 vars
    console.log("Overrided size is: " + overrideSize); // it should return token 'sm' | 'md' and other
    console.log("Overrided stroke width is: " + overrideStrokeWidth); // it should the same as above
    console.log("Overrided color is: " + overrideColor); // it should return string color

    /**
     * Inside this method, the overrideStyles properties will accepting payload from any overrideStyles
     * that come from applyOverride method, then it will convert it by calling *_ICON_*_TOKEN_VALUE 
     * that have the actuall values of every tokens, the overrideStyles token will call this value.
     *  */ 
    const overrideStyles: IMultiProviderIconStyleConfig = {
      provider: {
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
      }
    } as const

    return overrideStyles; // it should return the all override actuall values
  }

}
