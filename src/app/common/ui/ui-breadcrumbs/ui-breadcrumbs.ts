import { Component, signal } from '@angular/core';
import { TBreadcrumbsItemsConfig, UiIcons } from '@/ui/index';
import { ActivatedRoute, ActivatedRouteSnapshot, PRIMARY_OUTLET, Router, RouterLink, UrlSegment, UrlSegmentGroup, UrlTree } from "@angular/router";
import { ChevronRight } from 'lucide-angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ui-breadcrumbs',
  imports: [RouterLink, UiIcons],
  templateUrl: './ui-breadcrumbs.html',
  styleUrl: './ui-breadcrumbs.scss',
})
export class UiBreadcrumbs {

  // Chevron icon
  readonly ChevronRight = ChevronRight;

  // Last item of breadcrumbs
  lastItems(i: number, arr: TBreadcrumbsItemsConfig) {
    return i === arr.length - 1;
  }

  // Breadcrumbs 
  breadcrumbItems: TBreadcrumbsItemsConfig = [];
  constructor(private router: Router, private prevLocation: Location) {
    let currentRoute: ActivatedRouteSnapshot | null = router.routerState.snapshot.root;
    const breadcrumb: TBreadcrumbsItemsConfig = [];
    let url = '';

    while (currentRoute) {
      if (currentRoute.routeConfig?.path) {
        url = url + '/' + currentRoute.routeConfig.path;
        console.log("Route: " + url);
        if (currentRoute.data['breadcrumbs']) {
          breadcrumb.push({
            label: currentRoute.data['breadcrumbs'],
            route: url,
          })
        }
      }
      currentRoute = currentRoute.firstChild;   
    }
    this.breadcrumbItems = breadcrumb;
    console.log(this.breadcrumbItems)
  }

  // Return to prev page
  goPrevPage() {
    this.prevLocation.back();
  }

  // breadcrumbItems: TBreadcrumbsItemsConfig = [];
  // constructor(private router: Router, private prevLocation: Location) {
  //   let currentRoute: ActivatedRouteSnapshot | null = router.routerState.snapshot.root;
  //   const breadcrumb: TBreadcrumbsItemsConfig = [];
  //   let url = '';

  //   while (currentRoute) {
  //     // const route = currentRoute.pop()!;
  //     // currentRoute.push(...route.children);

  //     if (currentRoute.routeConfig?.path) {
  //       url += '/' + currentRoute.routeConfig.path;
  //       if (currentRoute.data['breadcrumbs']) {
  //         breadcrumb.push({
  //           label: currentRoute.data['breadcrumbs'],
  //           route: url,
  //           routes: currentRoute.data
  //         })
  //       }
  //     }
  //     currentRoute = currentRoute.firstChild;

  //     // const tree: UrlTree = router.parseUrl(router.url);
  //     // const fragment = tree.fragment;
  //     // console.log("Fragment: " + fragment);
  //     // const quary = tree.queryParams;
  //     // console.log("Query: " + quary);
  //     // const group: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
  //     // console.log("Group: " + group);
  //     // const segment: UrlSegment[] = group.segments;
  //     // console.log("Segment: " + segment);
      

  //     // Request current page URLs and label
  //     // this.breadcrumbItems = [{
  //     //   label: route.data['breadcrumbs'],
  //     //   route: this.router.url,
  //     //   routes: route.data
  //     // }]
  //     console.log("All routes: " + this.router.url.split('/')) // remove at prod
  //     console.log("Current route: " + url); // remove at prod
  //     // console.log("Route label: " + route.data['breadcrumbs']);    
  //   }
  //   this.breadcrumbItems = breadcrumb;

  //   // if (router.lastSuccessfulNavigation) {
  //   //   this.isLast.set(true);
  //   // }
  // }

  // root route
  // travarse child route
  // pick metadata and url
  // dave to an array
  // render the array to breadcrumbs
  
}
