import { Component } from '@angular/core';
import { TBreadcrumbsItemsConfig, UiIcons } from '@/ui/index';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-ui-breadcrumbs',
  imports: [RouterLink, UiIcons],
  templateUrl: './ui-breadcrumbs.html',
  styleUrl: './ui-breadcrumbs.scss',
})
export class UiBreadcrumbs {

  // Chevron icon
  readonly ChevronRight = ChevronRight;

  // Breadcrumbs array
  routeItems = [];

  // Last item of breadcrumbs
  lastItems(i: number, arr: TBreadcrumbsItemsConfig) {
    return i === arr.length - 1;
  }
  
  // Breadcrumbs items
  breadcrumbItems: TBreadcrumbsItemsConfig = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Request current page URLs and label
    this.activatedRoute.data.subscribe(data => {
      this.breadcrumbItems = [{
        label: data['breadcrumbs'],
        route: this.router.url
      }]
      console.log(this.breadcrumbItems); // remove at prod
    })
  }

}
