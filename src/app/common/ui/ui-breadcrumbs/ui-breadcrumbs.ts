import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TBreadcrumbsItemsConfig, UiIcons } from '@/ui/index';
import { 
  ActivatedRouteSnapshot, 
  NavigationEnd, 
  Router, 
  RouterLink 
} from "@angular/router";
import { ChevronRight } from 'lucide-angular';
import { Subscription } from 'rxjs';
import { IconProviderService } from '../../service/ui/icon-services/iconProviderService';

@Component({
  selector: 'app-ui-breadcrumbs',
  imports: [RouterLink, UiIcons],
  templateUrl: './ui-breadcrumbs.html',
  styleUrl: './ui-breadcrumbs.scss',
})
export class UiBreadcrumbs implements OnInit, OnDestroy 
{
  // Dependecy injections
  private router = inject(Router);
  private iconService = inject(IconProviderService);

  // ! Icon properties
  public setIcon = this.iconService.iconProvider();
  public readonly ChevronRightIcon = {
    icon: ChevronRight,
    strokeWidth: 1.5,
    color: 'var(--color-icon)', 
    size: 21
  };

  // ! Initiate breadcrumbs
  private routesubs?: Subscription;
  public ngOnInit(): void 
  {
    // Initiate for the first time
    this.breadcrumbsBuilder(); 
    // Subs(observe) so when the page is moving, rebuild the breadcrumbs 
    this.routesubs = this.router.events.subscribe(event => 
    { 
      if (event instanceof NavigationEnd) 
      {
         this.breadcrumbsBuilder();
      }
    })
    // Logger
    console.log("Initiating breadcrumbs"); 
  }

  // ! Breadcrumbs route traverse
  public breadcrumbItems: TBreadcrumbsItemsConfig = [];
  public breadcrumbsBuilder(): void 
  {
    let currentRoute: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    const breadcrumb: TBreadcrumbsItemsConfig = [];
    let url = '';

    while (currentRoute) 
    {
      if (currentRoute.routeConfig?.path) 
      {
        url = url + '/' + currentRoute.routeConfig.path;
        if (currentRoute.data['breadcrumbs']) 
        {
          breadcrumb.push({
            label: currentRoute.data['breadcrumbs'],
            route: url,
          })
        }
      }
      currentRoute = currentRoute.firstChild;   
    }
    this.breadcrumbItems = breadcrumb;
    // Logger
    console.log(this.breadcrumbItems)
  }

  // ! Last item of breadcrumbs
  public lastItems(i: number, arr: TBreadcrumbsItemsConfig): boolean 
  {
    return i === arr.length - 1;
  }

  // ! Destroy breadcrumbs observer (subs)
  public ngOnDestroy(): void 
  {
    this.routesubs?.unsubscribe();
  }

}
