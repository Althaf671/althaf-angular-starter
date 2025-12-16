
import { IIconBundledStyleConfig, IIconCdnStyleConfig } from "@/app/common/ui";
import { 
    SHORTENED_CDN_STYLE_CONFIG, 
    SHORTENED_BUNDLED_STYLE_CONFIG 
} from "../styles/shortened.style.default";

export function useHugeStyleWithAccentColor(color: string): IIconCdnStyleConfig 
{
    return {
        "font-size": SHORTENED_CDN_STYLE_CONFIG["font-size"],
        "font-weight": SHORTENED_CDN_STYLE_CONFIG["font-weight"],
        color: color
    }
}

export function useLucideStyleWithAccentColor(color: string): IIconBundledStyleConfig 
{
    return {
        size: SHORTENED_BUNDLED_STYLE_CONFIG.size,
        strokeWidth: SHORTENED_BUNDLED_STYLE_CONFIG.strokeWidth,
        color: color
    }
}