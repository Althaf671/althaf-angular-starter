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

@Component({
  selector: 'app-ui-breadcrumbs',
  imports: [RouterLink, UiIcons],
  templateUrl: './ui-breadcrumbs.html',
  styleUrl: './ui-breadcrumbs.scss',
})
export class UiBreadcrumbs implements OnInit, OnDestroy 
{
  // Router DI
  private router = inject(Router);

  // ! Icons
  readonly ChevronRight = ChevronRight;

  // ! Initiate breadcrumbs
  private routesubs?: Subscription;
  ngOnInit(): void 
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
  private breadcrumbsBuilder() 
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
  lastItems(i: number, arr: TBreadcrumbsItemsConfig) 
  {
    return i === arr.length - 1;
  }

  // ! Destroy breadcrumbs observer (subs)
  ngOnDestroy(): void 
  {
    this.routesubs?.unsubscribe();
  }

}
