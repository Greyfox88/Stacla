import { Character } from "../database/database.service";

export class MasterCharacterList{
    public masterCharacterList: Character[] = [
        {
            Name: "Animal Berengarian Dragon",
            Traits: "Berengarian Dragon",
            Focuses: "Hunting\nMelee\nObservant",
            Values:"Arboreal Hunter\nPays small creatures little heed",

            AttControl: 10,
            AttDaring: 13,
            AttFitness: 12,
            AttInsight: 5,
            AttPresence: 10,
            AttReason: 4,
          
            DisCommand: 3,
            DisConn: 0,
            DisSecurity: 2,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Denevan Neural Parasite",
            Traits: "Denevan Neural Parasite",

            AttControl: 9,
            AttDaring: 4,
            AttFitness: 8,
            AttInsight: 4,
            AttPresence: 5,
            AttReason: 6,
          
            DisCommand: 1,
            DisConn: 0,
            DisSecurity: 1,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Gunji Jackdaw",
            Traits: "Gunji Jackdaw",

            AttControl: 3,
            AttDaring: 4,
            AttFitness: 8,
            AttInsight: 4,
            AttPresence: 6,
            AttReason: 3,
          
            DisCommand: 0,
            DisConn: 0,
            DisSecurity: 0,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Mugato",
            Traits: "Mugato",
            Values:"Terratorial Predator",

            AttControl: 6,
            AttDaring: 8,
            AttFitness: 11,
            AttInsight: 4,
            AttPresence: 10,
            AttReason: 6,
          
            DisCommand: 2,
            DisConn: 0,
            DisSecurity: 2,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Nova Digger",
            Traits: "Nova Digger",

            AttControl: 3,
            AttDaring: 4,
            AttFitness: 10,
            AttInsight: 4,
            AttPresence: 6,
            AttReason: 4,
          
            DisCommand: 0,
            DisConn: 0,
            DisSecurity: 0,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Palukoo",
            Traits: "Palukoo",

            AttControl: 6,
            AttDaring: 4,
            AttFitness: 5,
            AttInsight: 6,
            AttPresence: 6,
            AttReason: 5,
          
            DisCommand: 0,
            DisConn: 0,
            DisSecurity: 0,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Sehlat",
            Traits: "Sehlat",
            Focuses: "Melee\nTracking",
            Values: "Terratorial Predator",
          
            AttControl: 8,
            AttDaring: 11,
            AttFitness: 12,
            AttInsight: 5,
            AttPresence: 9,
            AttReason: 2,
          
            DisCommand: 2,
            DisConn: 0,
            DisSecurity: 3,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Talarian Hook Spider",
            Traits: "Talarian Hook Spider",
            
            AttControl: 10,
            AttDaring: 7,
            AttFitness: 8,
            AttInsight: 2,
            AttPresence: 2,
            AttReason: 4,
          
            DisCommand: 1,
            DisConn: 0,
            DisSecurity: 3,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Animal Targ",
            Traits: "Targ",
          
            AttControl: 4,
            AttDaring: 10,
            AttFitness: 11,
            AttInsight: 5,
            AttPresence: 8,
            AttReason: 2,
          
            DisCommand: 2,
            DisConn: 0,
            DisSecurity: 2,
            DisEngineering: 0,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Animal"
        },
        {
            Name: "Bajoran Militia",
            Traits: "Bajoran",
            Rank: "Captain",
            Environment: "Homeworld",
            EarlyOutlook: "To Protect",
            Education: "Allied Military / Militia",
            CareerEvents: "Required to take command, Death of a friend",
            CareerLength: "Veteran",
            Values: "Sometimes a small force is better than a bigger one\nResistance is never futile\nGood leaders get their hands dirty\nThe best protection is early detection",
            Focuses: "Survival\nSaboteur\nCamouflage\nGuerrilla Warfare\nHand Phasers\nTeam Dynamics",

            AttControl: 10,
            AttDaring: 12,
            AttFitness: 9,
            AttInsight: 9,
            AttPresence: 8,
            AttReason: 8,
          
            DisCommand: 4,
            DisConn: 2,
            DisSecurity: 5,
            DisEngineering: 2,
            DisScience: 1,
            DisMedical: 2,
          
            Notes: "Stats from Character Creation",

            Faction: "Bajoran Republic"
        },
        {
            Name: "Bajoran Vedek",
            Traits: "Bajoran",
            Rank: "Vedek",
            Environment: "Isolated Colony",
            EarlyOutlook: "Diplomacy and Politics (A)",
            Education: "Civilian / Politician",
            CareerEvents: "Serious Injury, Death of a Friend",
            CareerLength: "Experienced",
            Values: "Healing comes from the heart\nFaith is the best weapon against evil\nA civilization is nothing without it's people\nThe Prophets protect us",
            Focuses: "Religion\nEmotional Intelligence\nHistory\nInspiration\nBedside Manner\nEthics",

            AttControl: 9,
            AttDaring: 8,
            AttFitness: 8,
            AttInsight: 11,
            AttPresence: 10,
            AttReason: 10,
          
            DisCommand: 5,
            DisConn: 2,
            DisSecurity: 1,
            DisEngineering: 1,
            DisScience: 3,
            DisMedical: 4,
          
            Notes: "Stats from Character Creation",

            Faction: "Bajoran Republic"
        },
        {
            Name: "Cardassian Gul",
            Traits: "Cardassian",
            Rank: "Gul",
            Values: "Cardassia expects everyone to do their duty\nKnowledge is power, and power is everything",
            Focuses: "Debate\nPolitics\nMilitary Tactics\nWillpower",

            AttControl: 11,
            AttDaring: 9,
            AttFitness: 8,
            AttInsight: 9,
            AttPresence: 12,
            AttReason: 11,
          
            DisCommand: 4,
            DisConn: 3,
            DisSecurity: 2,
            DisEngineering: 2,
            DisScience: 2,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Cardassian Union"
        },
        {
            Name: "Cardassian Glinn",
            Traits: "Cardassian",
            Rank: "Glinn",
            Values: "Cardassians did not choose to become superior, fate made us this way",
            Focuses: "Military Tactics\nWillpower",

            AttControl: 12,
            AttDaring: 10,
            AttFitness: 9,
            AttInsight: 8,
            AttPresence: 11,
            AttReason: 10,
          
            DisCommand: 2,
            DisConn: 2,
            DisSecurity: 3,
            DisEngineering: 1,
            DisScience: 1,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Cardassian Union"
        },
        {
            Name: "Cardassian Soldier",
            Traits: "Cardassian",

            AttControl: 11,
            AttDaring: 10,
            AttFitness: 9,
            AttInsight: 8,
            AttPresence: 9,
            AttReason: 10,
          
            DisCommand: 1,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Faction: "Cardassian Union"
        },
        {
            Name: "Borg Tactical Drone",
            Traits: "Borg, Klingon",
          
            AttControl: 11,
            AttDaring: 9,
            AttFitness: 12,
            AttInsight: 6,
            AttPresence: 6,
            AttReason: 12,
          
            DisCommand: 0,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 1,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Borg Collective"
        },
        {
            Name: "Borg Technical Drone",
            Traits: "Borg, Vulcan",
          
            AttControl: 11,
            AttDaring: 9,
            AttFitness: 10,
            AttInsight: 6,
            AttPresence: 6,
            AttReason: 12,
          
            DisCommand: 0,
            DisConn: 2,
            DisSecurity: 1,
            DisEngineering: 2,
            DisScience: 1,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Borg Collective"
        },
        {
            Name: "Borg Medical Drone",
            Traits: "Borg, Cardassian",
          
            AttControl: 11,
            AttDaring: 9,
            AttFitness: 10,
            AttInsight: 6,
            AttPresence: 6,
            AttReason: 12,
          
            DisCommand: 0,
            DisConn: 0,
            DisSecurity: 1,
            DisEngineering: 1,
            DisScience: 2,
            DisMedical: 2,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Borg Collective"
        },
        {
            Name: "Ferengi DaiMon",
            Traits: "Ferengi",
            Rank: "DaiMon",
            Values: "48th Rule of Acquisition — The Bigger the Smile, the Sharper the Knife\n211th Rule of Acquisition — Employees are the Rungs on the Ladder to Success; Don’t Hesitate to Step On Them",
            Focuses: "Deception\nExtortion\nNegotiation\nWeapons",
          
            AttControl: 10,
            AttDaring: 11,
            AttFitness: 8,
            AttInsight: 10,
            AttPresence: 11,
            AttReason: 10,
          
            DisCommand: 4,
            DisConn: 3,
            DisSecurity: 2,
            DisEngineering: 2,
            DisScience: 1,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Ferengi Alliance"
        },
        {
            Name: "Ferengi Salesman",
            Traits: "Ferengi",
            Rank: "Salesman",
            Values: "First Rule of Acquisition — Once You Have Their Money, Never Give It Back",
            Focuses: "Economics\nNegotiation",
          
            AttControl: 11,
            AttDaring: 9,
            AttFitness: 8,
            AttInsight: 10,
            AttPresence: 12,
            AttReason: 10,
          
            DisCommand: 3,
            DisConn: 0,
            DisSecurity: 1,
            DisEngineering: 2,
            DisScience: 2,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Ferengi Alliance"
        },
        {
            Name: "Ferengi Menial",
            Traits: "Ferengi",
            Rank: "Menial",
          
            AttControl: 10,
            AttDaring: 8,
            AttFitness: 8,
            AttInsight: 11,
            AttPresence: 11,
            AttReason: 9,
          
            DisCommand: 1,
            DisConn: 2,
            DisSecurity: 1,
            DisEngineering: 2,
            DisScience: 0,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Ferengi Alliance"
        },
        {
            Name: "Jem'Hadar First",
            Traits: "Jem'Hadar",
            Focuses: "Combat Tactics\nHand-to-Hand",
            Rank: "First",
            Values: "We Are Now Dead; We Go into Battle to Reclaim Our Lives",
          
            AttControl: 10,
            AttDaring: 11,
            AttFitness: 12,
            AttInsight: 10,
            AttPresence: 8,
            AttReason: 7,
          
            DisCommand: 2,
            DisConn: 2,
            DisSecurity: 3,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Dominion"
        },
        {
            Name: "Jem'Hadar Warrior",
            Traits: "Jem'Hadar",
            Focuses: "Combat Tactics\nHand-to-Hand",
          
            AttControl: 10,
            AttDaring: 11,
            AttFitness: 12,
            AttInsight: 10,
            AttPresence: 7,
            AttReason: 7,
          
            DisCommand: 1,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Dominion"
        },
        {
            Name: "Klingon Captain",
            Traits: "Klingon",
            Rank: "Captain",
            Values: "There is Nothing More Honorable Than Victory\nTo Kill the Defenseless is Not True Battle",
            Focuses: "Hand-to-Hand Combat\nIntimidation\nResilience\nStarship Tactics",
          
            AttControl: 10,
            AttDaring: 12,
            AttFitness: 10,
            AttInsight: 9,
            AttPresence: 12,
            AttReason: 8,
          
            DisCommand: 3,
            DisConn: 2,
            DisSecurity: 4,
            DisEngineering: 2,
            DisScience: 1,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Klingon Empire"
        },
        {
            Name: "Klingon Veteran",
            Traits: "Klingon",
            Rank: "Veteran",
            Values: "Today is a good day to die!",
            Focuses: "Hand-to-Hand Combat\nResilience",
          
            AttControl: 9,
            AttDaring: 12,
            AttFitness: 11,
            AttInsight: 9,
            AttPresence: 11,
            AttReason: 8,
          
            DisCommand: 2,
            DisConn: 2,
            DisSecurity: 3,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 1,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Klingon Empire"
        },
        {
            Name: "Klingon Warrior",
            Traits: "Klingon",
            Rank: "Warrior",
          
            AttControl: 9,
            AttDaring: 11,
            AttFitness: 11,
            AttInsight: 8,
            AttPresence: 10,
            AttReason: 8,
          
            DisCommand: 1,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Klingon Empire"
        },
        {
            Name: "Romulan Major",
            Traits: "Romulan",
            Rank: "Major",
            Values: "The Ends Justify the Means\nEverything I Do, I Do for Romulus",
            Focuses: "Deception\nInfiltration\nInterrogation\nParanoid",
          
            AttControl: 12,
            AttDaring: 9,
            AttFitness: 9,
            AttInsight: 10,
            AttPresence: 9,
            AttReason: 11,
          
            DisCommand: 4,
            DisConn: 1,
            DisSecurity: 3,
            DisEngineering: 2,
            DisScience: 3,
            DisMedical: 2,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Romulan Star Empire"
        },
        {
            Name: "Romulan Centurion",
            Traits: "Romulan",
            Rank: "Centurion",
            Values: "I Will Not Fail in My Duty to the Empire",
            Focuses: "Paranoid\nGuerilla Tactics",
          
            AttControl: 12,
            AttDaring: 10,
            AttFitness: 9,
            AttInsight: 10,
            AttPresence: 9,
            AttReason: 10,
          
            DisCommand: 3,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 1,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Romulan Star Empire"
        },
        {
            Name: "Romulan Uhlan",
            Traits: "Romulan",
            Rank: "Uhlan",
          
            AttControl: 11,
            AttDaring: 8,
            AttFitness: 9,
            AttInsight: 10,
            AttPresence: 8,
            AttReason: 11,
          
            DisCommand: 1,
            DisConn: 2,
            DisSecurity: 2,
            DisEngineering: 1,
            DisScience: 0,
            DisMedical: 0,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Romulan Star Empire"
        },
        {
            Name: "Vorta Overseer",
            Traits: "Vorta",
            Focuses: "Deception\nDiplomacy\nObservation\nPsychology",
            Values: "I Live to Serve the Founders\nThere Is Nothing I Will Not Do to Succeed",
          
            AttControl: 9,
            AttDaring: 8,
            AttFitness: 9,
            AttInsight: 11,
            AttPresence: 12,
            AttReason: 11,
          
            DisCommand: 4,
            DisConn: 3,
            DisSecurity: 1,
            DisEngineering: 2,
            DisScience: 3,
            DisMedical: 2,
          
            Notes: "Stats from Core Rulebook",

            Era: "TNG",
            Faction: "Dominion"
        },
    ];
}