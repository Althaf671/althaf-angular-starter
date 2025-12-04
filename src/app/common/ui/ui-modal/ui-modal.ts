import { Component, Input } from '@angular/core';
import { IModalItemsConfig } from '../models/modal.model';
import { UiIcons } from "../ui-icons/ui-icons";

@Component({
  selector: 'app-ui-modal',
  imports: [UiIcons],
  templateUrl: './ui-modal.html',
  styleUrl: './ui-modal.scss',
})
export class UiModal 
{
  // ! Modal config
  @Input() modalConfig!: IModalItemsConfig;


}
