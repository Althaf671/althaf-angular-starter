import { Component, Input, signal } from '@angular/core';
import { UiIcons } from "../../../../../common/ui/ui-icons/ui-icons";
import { AppWindow, Gauge, Landmark, ListChecks, Settings, SquareActivity } from 'lucide-angular';
import { Sidebar } from "../../../../../common/layout/sidebar/sidebar";

@Component({
  selector: 'app-home',
  imports: [UiIcons, Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // Sidebar icons
  readonly MenuIcons = AppWindow;
  readonly DashboardIcon = Gauge;
  readonly FinanceIcon = Landmark;
  readonly TodoIcon = ListChecks;
  readonly HealthIcon = SquareActivity;
  readonly SettingIcon = Settings;

}
