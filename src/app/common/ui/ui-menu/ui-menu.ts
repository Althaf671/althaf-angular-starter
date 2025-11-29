import { Component, ElementRef, HostListener, Input, signal } from '@angular/core';
import { UiIcons } from "../ui-icons/ui-icons";
import { TMenuConfig } from '../models/menu.model';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-ui-menu',
  imports: [UiIcons, RouterLink, RouterLinkActive],
  templateUrl: './ui-menu.html',
  styleUrl: './ui-menu.scss',
})
export class UiMenu {
  constructor (private elementRef: ElementRef) {};

  // Toggle menu
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update((isOpen) => !isOpen);
  }

  // Menu items
  @Input() menuItems: TMenuConfig = [];

  // Handle outside click
  @HostListener('document:click', ['$event'])
  isClicked(event: Event) {
    if (this.isOpen() && !this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

}
