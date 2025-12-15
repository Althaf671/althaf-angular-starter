import { Component } from '@angular/core';
import { Sidebar } from "../../../../../common/layout/sidebar/sidebar";
import { BasePageComponent } from '../../common/base-page-component';

@Component({
  selector: 'app-finance',
  imports: [Sidebar],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
})
export class Finance extends BasePageComponent
{

}
