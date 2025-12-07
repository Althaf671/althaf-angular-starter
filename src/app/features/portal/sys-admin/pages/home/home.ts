import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Sidebar } from "@/layout/sidebar/sidebar";
import { MENU_CONFIG } from './common/ui-config/menu.config';
import { Bell } from 'lucide-angular';
import { 
  UiIcons, 
  UiMenu, 
  UiBreadcrumbs, 
  UiModal, 
  UiCard, 
} from "@/ui/index";
import { 
  SIDEBAR_HEADER_ITEMS, 
  SIDEBAR_PRIMARY_MENU_ITEMS, 
  SIDEBAR_SECONDARY_MENU_ITEMS, 
  SIDEBAR_THIRD_MENU_ITEMS
} from '../../common/service/ui-config/sidebar.config';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterStateService } from '@/app/common/service/state/router.state.service';
import { totalActiveUsers, totalProfit, totalSuccessTransaction, totalUsers } from './common/dashboard-data/metric.data';


@Component({
  selector: 'app-home',
  imports: [
    UiIcons,
    Sidebar,
    UiMenu,
    UiBreadcrumbs,
    RouterLink,
    RouterOutlet,
    UiModal,
    UiCard
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy 
{
  // Dependecy injections
  private routerState = inject(RouterStateService);

  //========== PROPERTY HEADER, MENU, SIDEBAR CONFIG ==========//
  public readonly pageLayoutConfig = {
    headerIcons: { NotificationIcon: Bell },
    menuConfig: MENU_CONFIG,
    sidebarConfigs: 
    {
      headerItems: SIDEBAR_HEADER_ITEMS,
      primaryItems: SIDEBAR_PRIMARY_MENU_ITEMS,
      secondaryItems: SIDEBAR_SECONDARY_MENU_ITEMS,
      thirdItems: SIDEBAR_THIRD_MENU_ITEMS,
    }
  } as const
  //============== END OF PROPERTY ===============//


  //========== METHOD HOME CONTENT VISIBILITY ==========//
  // States
  public isHomePage = false;
  private routeSubs?: Subscription;

  // Initiate event
  public ngOnInit(): void 
  {
    this.isHomePage = this.routerState.isCurrentRoute('/home');
    this.routeSubs = this.routerState.subscribeRoute(url => 
    {
      this.isHomePage = url.includes('/home');
    });
    console.log("isHomePage and routeSubs initiated"); 
    console.log("isHomePage value: " + this.isHomePage); 
  }

  // Destroy event
  public ngOnDestroy(): void 
  {
    this.routeSubs?.unsubscribe();
    console.log("routeSubs destroyed");
  }
  //============== END OF METHOD ===============//


  //========== PROPERTY METRIC CARD CONFIG ==========//
  // Weekly
  protected totalProfit = totalProfit;
  protected totalUsers = totalUsers;
  protected totalSuccessTransaction = totalSuccessTransaction;
  protected totalActiveUsers = totalActiveUsers;

  // Monthly

  // Yearly

  //============== END OF PROPERTY ===============//


}