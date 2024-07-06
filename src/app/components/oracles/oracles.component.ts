import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { OracleMissionTypesService } from '../../services/oracles/mission-types/oracle-mission-types.service';
import { OracleComponent } from './oracle/oracle.component';
import { OracleIncidentService } from '../../services/oracles/incident/oracle-incident.service';
import { OracleThemeService } from '../../services/oracles/theme/oracle-theme.service';
import { OracleAdvantageService } from '../../services/oracles/advantages/oracle-advantage.service';
import { OracleComplicationService } from '../../services/oracles/complication/oracle-complication.service';
import { OracleEncounterService } from '../../services/oracles/encounter/oracle-encounter.service';
import { OracleMomentumService } from '../../services/oracles/momentum/oracle-momentum.service';
import { OracleThreatService } from '../../services/oracles/threat/oracle-threat.service';
import { OracleBaseService } from '../../services/oracles/oracle-base.service';

@Component({
  selector: 'app-oracles',
  standalone: true,
  imports: [
    OracleComponent,
    NgClass
  ],
  templateUrl: './oracles.component.html',
  styleUrl: './oracles.component.scss'
})
export class OraclesComponent {
  showModal = false;
  modalTitle = "TEST";
  modalMessage = "MESSAGE";
  oracle: OracleBaseService | undefined;

  missionTypeOracle = inject(OracleMissionTypesService);
  incidentOracle = inject(OracleIncidentService);
  themeOracle = inject(OracleThemeService);
  advantagesOracle = inject(OracleAdvantageService);
  complicationsOracle = inject(OracleComplicationService);
  encounterOracle = inject(OracleEncounterService);
  momentumOracle = inject(OracleMomentumService);
  threatOracle = inject(OracleThreatService);

  showOracleModal(event:any)
  {
    this.oracle = event.oracle;
    this.modalTitle = event.oracle.title;
    this.modalMessage = event.result;
    this.showModal = true;
  }

  closeOracleModal()
  {
    this.showModal = false;
    this.oracle = undefined;
    this.modalTitle = "";
    this.modalMessage = "";
  }

  rerollOracle()
  {
    if(this.oracle==undefined)
      return;
    this.modalMessage = this.oracle.getResult()
  }
}
