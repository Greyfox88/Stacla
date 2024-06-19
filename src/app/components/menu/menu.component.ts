import { Component, inject } from '@angular/core';
import { RollerService } from '../../services/roller/roller.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private rollerService = inject(RollerService);

  roll()
  {
    console.log(this.rollerService.roll());
  }
}