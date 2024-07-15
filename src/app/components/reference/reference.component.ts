import { Component, inject } from '@angular/core';
import { RollerService } from '../../services/roller/roller.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss'
})
export class ReferenceComponent {
  rollerService = inject(RollerService)
  quickRoll: number = 20;

  quickRollD20(){
    this.quickRoll = this.rollerService.roll();
  }
}
