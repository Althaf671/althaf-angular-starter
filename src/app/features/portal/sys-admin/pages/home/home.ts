import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Sidebar } from "@/layout/sidebar/sidebar";
import { Subscription } from 'rxjs';
import { RouterStateService } from '@/app/common/service/state/router.state.service';
import { 
  UiIcons, 
  UiMenu, 
  UiBreadcrumbs, 
  // UiCard, 
} from "@/ui/index";
import { 
  totalActiveUsers, 
  totalProfit, 
  totalSuccessTransaction, 
  totalUsers 
} from './common/dashboard-data/metric.data';
import { BasePageComponent } from '../../common/base-page-component';


@Component({
  selector: 'app-home',
  imports: [
    UiIcons,
    Sidebar,
    UiMenu,
    UiBreadcrumbs,
    // UiCard
],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home extends BasePageComponent implements OnInit, OnDestroy
{
  // Dependecy injections
  private routerState = inject(RouterStateService);


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

}
