import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseMetricData 
{
  /**
   * These are basic blueprint of method that all
   * page components need to apply.
   */
  protected abstract loadMetricData(): void;
  protected abstract loadBarChartData(): void;
  protected abstract loadPieChartData(): void;
}
