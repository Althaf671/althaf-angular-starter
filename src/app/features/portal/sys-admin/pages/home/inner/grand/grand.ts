import { RouterStateService } from '@/app/common/service/state/RouterStateService';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grand',
  imports: [],
  templateUrl: './grand.html',
  styleUrl: './grand.scss',
})
export class Grand implements OnInit, OnDestroy {
  constructor(private routerState: RouterStateService) {};

  //=== ! ===//
  // States
  public isChildPage: boolean = false;
  private routeSubs?: Subscription;

  // Initiate event
  ngOnInit(): void {
    this.isChildPage = this.routerState.isCurrentRoute('/home/inner/grand');
    this.routeSubs = this.routerState.subscribeRoute(url => {
      this.isChildPage = url.endsWith('/home/inner/grand');
    })


  }

  // Destroy event
  ngOnDestroy(): void {
    this.routeSubs?.unsubscribe();

  }
}
