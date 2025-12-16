import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Sidebar } from "@/layout/sidebar/sidebar";
import { Subscription } from 'rxjs';
import { RouterStateService } from '@/app/common/service/state/router.state.service';
import { 
  UiIcons, 
  UiMenu, 
  UiBreadcrumbs, 
  UiCard, 
  UiButton, 
  UiAccordion, 
  UiAccordionGroup, 
  UiBadge, 
  UiButtonGroup, 
  UiCardGroup, 
  UiDropdown, 
  UiInput, 
  UiInputGroup, 
  UiMenuGroup, 
  UiListGroup, 
  UiListItem, 
  UiPaginationGroup, 
  UiTabsGroup, 
  UiToggleGroup 
} from "@/ui/index";
import { 
  totalActiveUsers, 
  totalProfit, 
  totalSuccessTransaction, 
  totalUsers 
} from './common/dashboard-data/metric.data';
import { BasePageComponent } from '../../common/base-page-component';
import { AppWindow } from 'lucide-angular';
import { Navbar, Header } from "@/app/common/layout";


@Component({
  selector: 'app-home',
  imports: [
    UiIcons,
    Sidebar,
    UiMenu,
    UiBreadcrumbs,
    UiCard,
    Navbar,
    Header,
    UiButton,
    UiAccordion,
    UiAccordionGroup,
    UiBadge,
    UiButtonGroup,
    UiCardGroup,
    UiDropdown,
    UiInput,
    UiInputGroup,
    UiMenuGroup,
    UiListGroup,
    UiListItem,
    UiPaginationGroup,
    UiTabsGroup,
    UiToggleGroup
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home extends BasePageComponent implements OnInit, OnDestroy
{
  // Dependecy injections
  private routerState = inject(RouterStateService);

  protected readonly MenuIcons = { 
    icon: AppWindow, 
    strokeWidth: 1.5,
    color: 'var(--color-icon)', 
    size: 24
  };


  //========== METHOD HOME CONTENT VISIBILITY ==========//
  // States
  protected isHomePage = false;
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


  //========== METHOD METRIC DATA CALL ==========//
  protected loadMetricData(): void 
  {
    console.log("Loading metric data");
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


  //========== METHOD BAR CHART DATA CALL ==========//
  protected loadBarChartData(): void 
  {
    console.log("Loading chart data");
  }
  //============== END OF METHOD ===============//

  //========== PROPERTY BAR CHART DATA CONFIG ==========//
  // Weekly
  // Monthly
  // Yearly
  //============== END OF PROPERTY ===============//

  //========== METHOD BAR CHART DATA CALL ==========//
  protected loadPieChartData(): void 
  {
    console.log("Loading chart data");
  }
  //============== END OF METHOD ===============//

  //========== PROPERTY BAR CHART DATA CONFIG ==========//
  // Weekly
  // Monthly
  // Yearly
  //============== END OF PROPERTY ===============//

  // Button testing
  // protected readonly btnDefaultIcon: IMultiIconConfig = {
  //   icons: {
  //     iconLucide: { 
  //       icon: AppWindow, 
  //       strokeWidth: 1.5, 
  //       color: 'var(--color-sidebar)', 
  //       size: 20
  //     },
  //     iconHuge: { 
  //       icon: "hgi hgi-stroke hgi-information-circle", 
  //       style: {
  //         'font-size':' 20px', 
  //         'color': 'var(--color-sidebar)', 
  //         'font-weight': '500'
  //       }
  //     }
  //   },
  // }

  // protected readonly btnSubmitIcon: IMultiIconConfig = {
  //   icons: {
  //     iconLucide: { 
  //       icon: AppWindow, 
  //       strokeWidth: 1.5, 
  //       color: 'var(--color-icon)', 
  //       size: 20 
  //     },
  //     iconHuge: { 
  //       icon: "hgi hgi-stroke hgi-upload-circle-01", 
  //       style: {
  //         'font-size':' 20px', 
  //         'color': 'var(--color-sidebar)', 
  //         'font-weight': '500'
  //       }
  //     }
  //   },
  // }

  // protected readonly btnDangerIcon: IMultiIconConfig = {
  //   icons: {
  //     iconLucide: { 
  //       icon: AppWindow, 
  //       strokeWidth: 1.5, 
  //       color: 'var(--color-icon)', 
  //       size: 20 
  //     },
  //     iconHuge: { 
  //       icon: "hgi hgi-stroke hgi-delete-02", 
  //       style: {
  //         'font-size':' 20px', 
  //         'color': 'var(--color-sidebar)', 
  //         'font-weight': '500'
  //       }
  //     }
  //   },
  // }

  // protected readonly btnWarnIcon: IMultiIconConfig = {
  //   icons: {
  //     iconLucide: { 
  //       icon: AppWindow, 
  //       strokeWidth: 1.5, 
  //       color: 'var(--color-icon)', 
  //       size: 20 
  //     },
  //     iconHuge: { 
  //       icon: "hgi hgi-stroke hgi-alert-02", 
  //       style: {
  //         'font-size':' 20px', 
  //         'color': 'var(--color-sidebar)', 
  //         'font-weight': '500'
  //       }
  //     }
  //   },
  // }


}
