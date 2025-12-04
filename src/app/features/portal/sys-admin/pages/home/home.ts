import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Bell } from 'lucide-angular';
import { UiIcons, UiMenu, UiBreadcrumbs, UiModal, UiCard, IModalItemsConfig } from "@/ui/index";
import { Sidebar } from "@/layout/sidebar/sidebar";
import { MENU_CONFIG } from './common/ui-config/menu.config';
import { 
  SIDEBAR_HEADER_ITEMS, 
  SIDEBAR_PRIMARY_MENU_ITEMS, 
  SIDEBAR_SECONDARY_MENU_ITEMS, 
  SIDEBAR_THIRD_MENU_ITEMS
} from '../../common/service/ui-config/sidebar.config';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Wrapper } from "@/app/common/layout/wrapper/wrapper";
import { Subscription } from 'rxjs';
import { RouterStateService } from '@/app/common/service/state/RouterStateService';


@Component({
  selector: 'app-home',
  imports: [
    UiIcons,
    Sidebar,
    UiMenu,
    UiBreadcrumbs,
    RouterLink,
    RouterOutlet,
    Wrapper,
    UiModal,
    UiCard
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy 
{
  // Router DI
  private routerState = inject(RouterStateService);

  //=== ! Header, Menu dropdown, sidebar config items ===//
  readonly pageLayoutConfig = {
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

  modalInfolItems: IModalItemsConfig = {
    title: 'Information',
    type: 'info',
    description: "This is an Information modal.",
  }


  //=== ! Control home content ===//
  // States
  public isHomePage = false;
  private routeSubs?: Subscription;

  // Initiate event
  ngOnInit(): void 
  {
    this.isHomePage = this.routerState.isCurrentRoute('/home');
    this.routeSubs = this.routerState.subscribeRoute(url => 
    {
      this.isHomePage = url.includes('/home');
    });
    console.log("isHomePage and routeSubs initiated"); // remove at prod
    console.log("isHomePage value: " + this.isHomePage); // remove at prod
  }

  // Destroy event
  ngOnDestroy(): void 
  {
    this.routeSubs?.unsubscribe();
    console.log("routeSubs destroyed"); // remove at prod
  }

}