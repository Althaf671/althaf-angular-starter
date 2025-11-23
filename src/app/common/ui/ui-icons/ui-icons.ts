import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ui-icons',
  imports: [LucideAngularModule],
  templateUrl: './ui-icons.html',
  styleUrl: './ui-icons.scss',
})
export class UiIcons {
  
  @Input() icon!: any;

  @Input() color!: string;

  @Input() strokeW!: number;

  @Input() size!: string | number;
}
