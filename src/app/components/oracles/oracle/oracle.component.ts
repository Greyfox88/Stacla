import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() oracleResultEvent = new EventEmitter();

  rollOracle()
  {
    this.oracleResultEvent.emit({oracle: this.oracle, result: this.oracle.getResult()});
  }
}
