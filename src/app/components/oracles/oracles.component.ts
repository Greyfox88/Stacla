import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { OracleComponent } from './oracle/oracle.component';
import { OracleMissionTypesService } from '../../services/oracles/mission-types/oracle-mission-types.service';
import { OracleAidAndReliefMTService } from '../../services/oracles/mission-types/Aid/oracle-aid-and-relief-mt.service';
import { OracleIncidentService } from '../../services/oracles/incident/oracle-incident.service';
import { OracleThemeService } from '../../services/oracles/theme/oracle-theme.service';
import { OracleAdvantageService } from '../../services/oracles/advantages/oracle-advantage.service';
import { OracleComplicationService } from '../../services/oracles/complication/oracle-complication.service';
import { OracleEncounterService } from '../../services/oracles/encounter/oracle-encounter.service';
import { OracleMomentumService } from '../../services/oracles/momentum/oracle-momentum.service';
import { OracleThreatService } from '../../services/oracles/threat/oracle-threat.service';
import { OracleBaseService } from '../../services/oracles/oracle-base.service';
import { OracleConspiracyMTService } from '../../services/oracles/mission-types/conspiracy/oracle-conspiracy-mt.service';
import { OracleDeepSpaceExplorationMTService } from '../../services/oracles/mission-types/DeepSpaceExploration/oracle-deep-space-exploration-mt.service';
import { OracleDefenceMTService } from '../../services/oracles/mission-types/Defence/oracle-defence-mt.service';
import { OracleDiplomacyMTService } from '../../services/oracles/mission-types/Diplomacy/oracle-diplomacy-mt.service';
import { OracleEscortAndEvacuationMTService } from '../../services/oracles/mission-types/EscortAndEvacuation/oracle-escort-and-evacuation-mt.service';
import { OracleEspionageMTService } from '../../services/oracles/mission-types/Espionage/oracle-espionage-mt.service';
import { OracleFirstContactMTService } from '../../services/oracles/mission-types/FirstContact/oracle-first-contact-mt.service';
import { OracleMedicalMTService } from '../../services/oracles/mission-types/Medical/oracle-medical-mt.service';
import { OracleNearSpaceExplorationMTService } from '../../services/oracles/mission-types/NearSpaceExploration/oracle-near-space-exploration-mt.service';
import { OraclePatrolMTService } from '../../services/oracles/mission-types/Patrol/oracle-patrol-mt.service';
import { OraclePlanetaryExplorationMTService } from '../../services/oracles/mission-types/PlanetaryExploration/oracle-planetary-exploration-mt.service';
import { OraclePoliticalMTService } from '../../services/oracles/mission-types/Political/oracle-political-mt.service';
import { OracleResearchAndDevelopmentMTService } from '../../services/oracles/mission-types/ResearchAnddevelopment/oracle-research-and-development-mt.service';
import { OracleShowTheFlagMTService } from '../../services/oracles/mission-types/ShowTheFlag/oracle-show-the-flag-mt.service';
import { OracleSpiritualMTService } from '../../services/oracles/mission-types/Spiritual/oracle-spiritual-mt.service';
import { OracleStarfleetJAGMTService } from '../../services/oracles/mission-types/StarfleetJAG/oracle-starfleet-jag-mt.service';
import { OracleTacticalMTService } from '../../services/oracles/mission-types/Tactical/oracle-tactical-mt.service';

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
  mtAidOracle = inject(OracleAidAndReliefMTService);
  mtConspiracyOracle = inject(OracleConspiracyMTService);
  mtDeepSpaceOracle = inject(OracleDeepSpaceExplorationMTService);
  mtDefenceOracle = inject(OracleDefenceMTService);
  mtDiplomacyOracle = inject(OracleDiplomacyMTService);
  mtEscortOracle = inject(OracleEscortAndEvacuationMTService);
  mtEspionageOracle = inject(OracleEspionageMTService);
  mtFirstContactOracle = inject(OracleFirstContactMTService);
  mtMedicalOracle = inject(OracleMedicalMTService);
  mtNearSpaceOracle = inject(OracleNearSpaceExplorationMTService);
  mtPatrolOracle = inject(OraclePatrolMTService);
  mtPlanetaryOracle = inject(OraclePlanetaryExplorationMTService);
  mtPoliticalOracle = inject(OraclePoliticalMTService);
  mtReseachOracle = inject(OracleResearchAndDevelopmentMTService);
  mtFlagOracle = inject(OracleShowTheFlagMTService);
  mtSpiritualOracle = inject(OracleSpiritualMTService);
  mtJagOracle = inject(OracleStarfleetJAGMTService);
  mtTacticalOracle = inject(OracleTacticalMTService);

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
