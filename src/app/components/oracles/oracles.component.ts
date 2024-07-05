import { Component, inject } from '@angular/core';
import { OracleMissionTypesService } from '../../services/oracles/mission-types/oracle-mission-types.service';
import { OracleComponent } from './oracle/oracle.component';
import { OracleIncidentService } from '../../services/oracles/incident/oracle-incident.service';
import { OracleThemeService } from '../../services/oracles/theme/oracle-theme.service';
import { OracleAdvantageService } from '../../services/oracles/advantages/oracle-advantage.service';
import { OracleComplicationService } from '../../services/oracles/complication/oracle-complication.service';
import { OracleEncounterService } from '../../services/oracles/encounter/oracle-encounter.service';
import { OracleMomentumService } from '../../services/oracles/momentum/oracle-momentum.service';
import { OracleThreatService } from '../../services/oracles/threat/oracle-threat.service';

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
  incidentOracle = inject(OracleIncidentService);
  themeOracle = inject(OracleThemeService);
  advantagesOracle = inject(OracleAdvantageService);
  complicationsOracle = inject(OracleComplicationService);
  encounterOracle = inject(OracleEncounterService);
  momentumOracle = inject(OracleMomentumService);
  threatOracle = inject(OracleThreatService);
}
