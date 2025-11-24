import { Component, Input, signal } from '@angular/core';
import { UiIcons } from "../../../../../common/ui/ui-icons/ui-icons";
import { Bell, Expand, Languages, Moon, Search, UserRound } from 'lucide-angular';
import { Sidebar } from "../../../../../common/layout/sidebar/sidebar";
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [UiIcons, Sidebar, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  // Sidebar icons
  readonly NotificationIcon = Bell;

  // Dropdown icons
  readonly ProfileIcon = UserRound;
  readonly LanguageIcon = Languages;
  readonly ToggleIcon = Moon;
  readonly FullscreenIcon = Expand;
  readonly SearchbarIcon = Search;


  // Toggle Dropdown
  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update((isOpen) => !isOpen);
  }

}
