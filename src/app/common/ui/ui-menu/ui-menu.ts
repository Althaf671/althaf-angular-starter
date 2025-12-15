import { Component, ElementRef, HostListener, Input, signal, inject } from '@angular/core';
import { IMenuItemsConfig, UiIcons } from '@/ui/index';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-ui-menu',
  imports: [UiIcons, RouterLink, RouterLinkActive],
  templateUrl: './ui-menu.html',
  styleUrl: './ui-menu.scss',
})
export class UiMenu 
{
  private elementRef = inject(ElementRef);

  // ! Toggle menu
  public isOpen = signal(false);

  toggleMenu() 
  {
    this.isOpen.update((isOpen) => !isOpen);
  }

  // ! Menu items
  @Input() menuItems: IMenuItemsConfig[] = [];

  // ! Handle outside click
  @HostListener('document:click', ['$event'])
  isClicked(event: Event) 
  {
    if (this.isOpen() && !this.elementRef.nativeElement.contains(event.target)) 
    {
      this.isOpen.set(false);
    }
  }

}
