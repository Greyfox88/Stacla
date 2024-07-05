import { Component, Input } from '@angular/core';
import { OracleBaseService } from '../../../services/oracles/oracle-base.service';

@Component({
  selector: 'app-oracle',
  standalone: true,
  imports: [],
  templateUrl: './oracle.component.html',
  styleUrl: './oracle.component.scss'
})
export class OracleComponent {
  @Input() oracle: OracleBaseService = new OracleBaseService();

  rollOracle()
  {
    console.log(this.oracle.getResult());
  }
}
