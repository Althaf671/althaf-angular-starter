import { Bell } from "lucide-angular";
import { MENU_CONFIG } from "./service/ui-config/menu.config";
import { 
    SIDEBAR_HEADER_ITEMS, 
    SIDEBAR_PRIMARY_MENU_ITEMS, 
    SIDEBAR_SECONDARY_MENU_ITEMS, 
    SIDEBAR_THIRD_MENU_ITEMS 
} from "./service/ui-config/sidebar.config";
import { NAVBAR_CONFIG } from "./service/ui-config/navbar.config";

export abstract class BasePageComponent  
{
  // Global static messages
  public static readonly ERROR_MESSAGE = "An error occured";
  
  //========== PROPERTY HEADER, MENU, SIDEBAR CONFIG ==========//
  public readonly  pageLayoutConfig = {
    headerIcons: { NotificationIcon: Bell },
    menuConfig: MENU_CONFIG,
    navbarConfig: NAVBAR_CONFIG,
    sidebarConfigs: 
    {
      headerItems: SIDEBAR_HEADER_ITEMS,
      primaryItems: SIDEBAR_PRIMARY_MENU_ITEMS,
      secondaryItems: SIDEBAR_SECONDARY_MENU_ITEMS,
      thirdItems: SIDEBAR_THIRD_MENU_ITEMS,
    },
  } as const
  //============== END OF PROPERTY ===============//

  // Required methods
  // protected abstract loadMetricData(): void;
  // protected abstract loadBarChartData(): void;
  // protected abstract loadPieChartData(): void;
  // later it will only for props, method will be handle by seperated service classes
}