import { Component, inject } from '@angular/core';
import { OracleMissionTypesService } from '../../services/oracles/oracle-mission-types.service';
import { OracleComponent } from './oracle/oracle.component';

@Component({
  selector: 'app-oracles',
  standalone: true,
  imports: [
    OracleComponent
  ],
  templateUrl: './oracles.component.html',
  styleUrl: './oracles.component.scss'
})
export class OraclesComponent {
  missionTypeOracle = inject(OracleMissionTypesService);
}
