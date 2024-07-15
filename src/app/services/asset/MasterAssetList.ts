import { Asset } from '../database/database.service';

export class MasterAssetList{
    public masterAssetList: Asset[] = [
        //Enterprise Era - ENT
        {
            Name: "Federation Shuttlepod",
            Class: "Shuttlepod",
            Scale: 1,
            Traits: "United Earth/Federation Shuttle",

            SysComms: 3,
            SysComputers: 2,
            SysEngines: 3,
            SysSensors: 3,
            SysStructure: 4,
            SysWeapons: 0,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 0,
            DeptScience: 1,
            DeptMedical: 0,  
          
            Era: "ENT",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Daedalus Class",
            Class: "Daeadalus Class",
            Scale: 3,
            Traits: "United Earth/Federation Starship",
            Talents: "Grappler Cables\nPolarized Hull Plating\nRugged Design",
          
            SysComms: 7,
            SysComputers: 7,
            SysEngines: 7,
            SysSensors: 8,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 1,
            DeptEngineering: 5,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "ENT",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Intrepid Class (22nd Century)",
            Class: "Intrepid Class (22nd Century)",
            Scale: 3,
            Traits: "United Earth Starship",
            Talents: "Grappler Cables\nPolarized Hull Plating",
          
            SysComms: 6,
            SysComputers: 5,
            SysEngines: 7,
            SysSensors: 6,
            SysStructure: 5,
            SysWeapons: 5,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 1,  
          
            Era: "ENT",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation NX Class",
            Class: "NX Class",
            Scale: 3,
            Traits: "United Earth/Federation Starship\nState of the Art",
            Talents: "Grappler Cables\nPolarized Hull Plating",

            SysComms: 6,
            SysComputers: 6,
            SysEngines: 6,
            SysSensors: 6,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "ENT",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Warp Delta Class",
            Class: "Warp Delta Class",
            Scale: 3,
            Traits: "United Earth Starship",
            Talents: "Grappler Cables\nPolarized Hull Plating",
          
            SysComms: 6,
            SysComputers: 5,
            SysEngines: 6,
            SysSensors: 6,
            SysStructure: 5,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 4,
            DeptEngineering: 3,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "ENT",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },

        //The Original Series Era - TOS
        {
            Name: "Federation Class-C Shuttlecraft",
            Class: "Class-C Shuttle",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 4,
            SysComputers: 4,
            SysEngines: 4,
            SysSensors: 4,
            SysStructure: 4,
            SysWeapons: 1,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 1,
            DeptMedical: 0,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Class-F Shuttle",
            Class: "Class-F Shuttle",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 5,
            SysComputers: 5,
            SysEngines: 5,
            SysSensors: 4,
            SysStructure: 5,
            SysWeapons: 0,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 1,
            DeptMedical: 0,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Orbital Transfer Pod",
            Class: "Orbital Transfer Pod",
            Scale: 1,
            Traits: "Federation Pod",
          
            SysComms: 5,
            SysComputers: 3,
            SysEngines: 3,
            SysSensors: 4,
            SysStructure: 3,
            SysWeapons: 0,
          
            DeptCommand: 0,
            DeptConn: 2,
            DeptSecurity: 0,
            DeptEngineering: 0,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Work Bee",
            Class: "Work Bee",
            Scale: 1,
            Traits: "Federation Pod",
          
            SysComms: 3,
            SysComputers: 3,
            SysEngines: 4,
            SysSensors: 3,
            SysStructure: 5,
            SysWeapons: 0,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 0,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Antares Class",
            Class: "Antares Class",
            Scale: 2,
            Traits: "Federation Starship",
            Talents: "Rugged Design",

            SysComms: 8,
            SysComputers: 8,
            SysEngines: 7,
            SysSensors: 8,
            SysStructure: 7,
            SysWeapons: 6,
          
            DeptCommand: 1,
            DeptConn: 3,
            DeptSecurity: 1,
            DeptEngineering: 4,
            DeptScience: 3,
            DeptMedical: 3,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Archer Class",
            Class: "Archer Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Advanced Sensor Suites\nImproved Impulse Drive",

            SysComms: 9,
            SysComputers: 8,
            SysEngines: 10,
            SysSensors: 9,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 1,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Cardenas Class",
            Class: "Cardenas Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Improved Warp Drive\nRedundant Systems (Engines)",

            SysComms: 7,
            SysComputers: 6,
            SysEngines: 9,
            SysSensors: 8,
            SysStructure: 6,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 1,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Constitution Class",
            Class: "Constitution Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Modular Laboratories\nRugged Design",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 8,
            SysStructure: 7,
            SysWeapons: 7,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Crossfield Class",
            Class: "Crossfield Class",
            Scale: 4,
            Traits: "Federation Starship\nExperimental",
            Talents: "Extensive Shuttlebays\nHigh-Resolution Sensors\nModular Laboratories\nDedicated Personnel (Science)",
          
            SysComms: 7,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 8,
            SysStructure: 8,
            SysWeapons: 7,
          
            DeptCommand: 1,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Engle Class",
            Class: "Engle Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Improved Warp Drive\nImproved Impulse Drive",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 10,
            SysSensors: 7,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 4,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Hiawatha Class",
            Class: "Hiawatha Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Advanced Sickbay\nRedundant Systems (Structure)",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 6,
            SysSensors: 9,
            SysStructure: 8,
            SysWeapons: 5,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 1,
            DeptScience: 3,
            DeptMedical: 5,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Hoover Class",
            Class: "Hoover Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Extensive Shuttlebays",
          
            SysComms: 6,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 8,
          
            DeptCommand: 1,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 4,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Magee Class",
            Class: "Magee Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Advanced Research Facilities\nDedicated Personnel (Science)",
          
            SysComms: 7,
            SysComputers: 9,
            SysEngines: 7,
            SysSensors: 10,
            SysStructure: 6,
            SysWeapons: 5,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 1,
            DeptEngineering: 4,
            DeptScience: 5,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Malachowski Class",
            Class: "Malachowski Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Fast Targeting Systems\nRapid Fire Torpedo Launcher",
          
            SysComms: 7,
            SysComputers: 6,
            SysEngines: 6,
            SysSensors: 8,
            SysStructure: 8,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 5,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 1,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Miranda Class",
            Class: "Miranda Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Extensive Shuttlebays",
          
            SysComms: 7,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 9,
            SysStructure: 8,
            SysWeapons: 8,
          
            DeptCommand: 3,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nimitz Class",
            Class: "Nimitz Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Command Ship\nExtensive Shuttlebays\nImproved Warp Drive",

            SysComms: 10,
            SysComputers: 7,
            SysEngines: 7,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 7,
          
            DeptCommand: 5,
            DeptConn: 1,
            DeptSecurity: 3,
            DeptEngineering: 1,
            DeptScience: 3,
            DeptMedical: 1,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Oberth Class",
            Class: "Oberth Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "High Resolution Sensors\nImproved Warp Drive",
          
            SysComms: 8,
            SysComputers: 9,
            SysEngines: 8,
            SysSensors: 9,
            SysStructure: 7,
            SysWeapons: 6,
          
            DeptCommand: 1,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        //Scout Type, likely saladin class, add later
        {
            Name: "Federation Shepard Class",
            Class: "Shepard Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Improved Impulse Drive\nRugged Design",
          
            SysComms: 6,
            SysComputers: 7,
            SysEngines: 9,
            SysSensors: 8,
            SysStructure: 8,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Soyouz Class",
            Class: "Soyouz Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "High-Resolution Sensors\nSecondary Reactors",
          
            SysComms: 8,
            SysComputers: 10,
            SysEngines: 9,
            SysSensors: 10,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 4,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Sydney Class",
            Class: "Sydney Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Improved Impulse Drive\nRugged Design",
          
            SysComms: 9,
            SysComputers: 7,
            SysEngines: 9,
            SysSensors: 9,
            SysStructure: 10,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 3,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Walker Class",
            Class: "Walker Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Rugged Design",
          
            SysComms: 7,
            SysComputers: 8,
            SysEngines: 7,
            SysSensors: 10,
            SysStructure: 7,
            SysWeapons: 6,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 3,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation K-Class Border Outpost",
            Class: "K-Class Border Outpost",
            Scale: 6,
            Traits: "Federation Starbase\nBorder Outpost",
          
            SysComms: 8,
            SysComputers: 6,
            SysEngines: 6,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 3,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Regula Class Multipurpose Station",
            Class: "Regula Class Multipurpose Station",
            Scale: 6,
            Traits: "Federation Station",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 8,
            SysSensors: 9,
            SysStructure: 10,
            SysWeapons: 3,
          
            DeptCommand: 1,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 2,
            DeptScience: 5,
            DeptMedical: 3,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Spacedock",
            Class: "Spacedock",
            Scale: 16,
            Traits: "Federation Station\nColossal",
          
            SysComms: 15,
            SysComputers: 13,
            SysEngines: 10,
            SysSensors: 13,
            SysStructure: 15,
            SysWeapons: 12,
          
            DeptCommand: 6,
            DeptConn: 4,
            DeptSecurity: 4,
            DeptEngineering: 6,
            DeptScience: 5,
            DeptMedical: 5,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Starbase",
            Class: "Starbase",
            Scale: 12,
            Traits: "Federation Station",
          
            SysComms: 12,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 13,
            SysStructure: 12,
            SysWeapons: 10,
          
            DeptCommand: 5,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 5,
            DeptScience: 5,
            DeptMedical: 5,  
          
            Era: "TOS",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Klingon D7 Class",
            Class: "D7 Class",
            Scale: 4,
            Traits: "Klingon Battle Cruiser",
            Talents: "Rugged Design\nSome have Cloaking Device",
          
            SysComms: 7,
            SysComputers: 7,
            SysEngines: 8,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Klingon Empire",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },
        {
            Name: "Klingon B'Rel Class Bird of Prey",
            Class: "B'Rel Class Bird of Prey",
            Scale: 3,
            Traits: "Klingon Bird of Prey",
            Talents: "Improved Reaction Control System\nCloaking Device",
          
            SysComms: 9,
            SysComputers: 8,
            SysEngines: 7,
            SysSensors: 9,
            SysStructure: 7,
            SysWeapons: 8,
          
            DeptCommand: 1,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "TOS",
            Faction: "Klingon Empire",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },
        {
            Name: "Planet Killer",
            Class: "Planet Killer",
            Scale: 12,
            Traits: "Federation Station",
          
            SysComms: 0,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 6,
            SysStructure: 15,
            SysWeapons: 10,
          
            DeptCommand: 0,
            DeptConn: 2,
            DeptSecurity: 4,
            DeptEngineering: 3,
            DeptScience: 1,
            DeptMedical: 0,  
          
            Era: "TOS",
            Faction: "Unique",
            Type: "Special",

            Notes: "Stats from Core Rulebook"
        },


        //TNG/DS9/VOY Era
        {
            Name: "Cardassian Galor Class",
            Class: "Galor Class",
            Scale: 4,
            Traits: "Cardassian Warship",
          
            SysComms: 9,
            SysComputers: 8,
            SysEngines: 9,
            SysSensors: 7,
            SysStructure: 8,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Cardassian Union",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },
        {
            Name: "Federation Type-6 Shuttle",
            Class: "Type-6 Shuttle",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 6,
            SysComputers: 5,
            SysEngines: 6,
            SysSensors: 5,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Type-7 Shuttle",
            Class: "Type-7 Shuttle",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 7,
            SysComputers: 7,
            SysEngines: 6,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 0,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Type-8 Shuttle",
            Class: "Type-8 Shuttle",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 6,
            SysComputers: 7,
            SysEngines: 7,
            SysSensors: 6,
            SysStructure: 6,
            SysWeapons: 4,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Attack Fighter",
            Class: "Attack Fighter",
            Scale: 1,
            Traits: "Federation Shuttle",
          
            SysComms: 5,
            SysComputers: 5,
            SysEngines: 7,
            SysSensors: 6,
            SysStructure: 5,
            SysWeapons: 7,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 2,
            DeptEngineering: 0,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Danube Class Runabout",
            Class: "Danube Class Runabout",
            Scale: 2,
            Traits: "Federation Runabout",
          
            SysComms: 9,
            SysComputers: 8,
            SysEngines: 7,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 7,
          
            DeptCommand: 0,
            DeptConn: 2,
            DeptSecurity: 1,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Aeroshuttle",
            Class: "Aeroshuttle",
            Scale: 2,
            Traits: "Federation Runabout",
          
            SysComms: 7,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 8,
            SysStructure: 9,
            SysWeapons: 6,
          
            DeptCommand: 0,
            DeptConn: 2,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 1,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Captain's Yacht",
            Class: "Captain's Yacht",
            Scale: 2,
            Traits: "Federation Runabout",
          
            SysComms: 9,
            SysComputers: 8,
            SysEngines: 8,
            SysSensors: 7,
            SysStructure: 7,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 1,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Mission Scout",
            Class: "Mission Scout",
            Scale: 2,
            Traits: "Federation Runabout",
          
            SysComms: 7,
            SysComputers: 8,
            SysEngines: 9,
            SysSensors: 9,
            SysStructure: 7,
            SysWeapons: 6,
          
            DeptCommand: 0,
            DeptConn: 1,
            DeptSecurity: 0,
            DeptEngineering: 1,
            DeptScience: 2,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Delta Flyer",
            Class: "Delta Flyer",
            Scale: 2,
            Traits: "Federation Runabout",
          
            SysComms: 8,
            SysComputers: 7,
            SysEngines: 9,
            SysSensors: 8,
            SysStructure: 7,
            SysWeapons: 7,
          
            DeptCommand: 0,
            DeptConn: 2,
            DeptSecurity: 1,
            DeptEngineering: 1,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Shuttlecraft",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Akira Class",
            Class: "Akira Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Ablative Armour\nExtensive Shuttlebays\nRapid-Fire Torpedo Launcher",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 10,
            SysWeapons: 11,
          
            DeptCommand: 3,
            DeptConn: 1,
            DeptSecurity: 4,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 3,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Ambassador Class",
            Class: "Ambassador Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "High-Resolution Sensors\nImproved Impulse Drive\nSaucer Separation",

            SysComms: 9,
            SysComputers: 10,
            SysEngines: 9,
            SysSensors: 11,
            SysStructure: 10,
            SysWeapons: 9,
          
            DeptCommand: 3,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Challenger Class",
            Class: "Challenger Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Improved Warp Drive\nRedundant Systems (Sensors)",
          
            SysComms: 8,
            SysComputers: 10,
            SysEngines: 12,
            SysSensors: 11,
            SysStructure: 9,
            SysWeapons: 8,
          
            DeptCommand: 1,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Cheyenne Class",
            Class: "Cheyenne Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Improved Reaction Control System\nImproved Warp Drive\nSecondary Reactors",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 9,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 1,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Constellation Class",
            Class: "Constellation Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Extensive Shuttlebays\nImproved Warp Drive",
          
            SysComms: 10,
            SysComputers: 9,
            SysEngines: 11,
            SysSensors: 11,
            SysStructure: 9,
            SysWeapons: 8,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Defiant Class",
            Class: "Defiant Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Ablative Armour\nImproved Impulse Drive",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 8,
            SysSensors: 9,
            SysStructure: 8,
            SysWeapons: 13,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 5,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Excelsior Class",
            Class: "Excelsior Class",
            Scale: 5,
            Traits: "Federation Starship\nThe Great Experiment",
            Talents: "Improved Warp Drive\nSecondary Reactors",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 8,
          
            DeptCommand: 4,
            DeptConn: 1,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Freedom Class",
            Class: "Freedom Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Improved Impulse Drive\nSecondary Reactors",
          
            SysComms: 10,
            SysComputers: 9,
            SysEngines: 11,
            SysSensors: 11,
            SysStructure: 8,
            SysWeapons: 10,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Galaxy Class",
            Class: "Galaxy Class",
            Scale: 6,
            Traits: "Federation Starship",
            Talents: "Modular Laboratories\nRedundant Systems\nSaucer Separation",
          
            SysComms: 9,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 3,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Intrepid Class",
            Class: "Intrepid Class",
            Scale: 4,
            Traits: "Federation Starship\nTop of the Line (2370)",
            Talents: "Advanced Sensor Suites\nEmergency Medical Hologram\nImproved Warp Drive",
          
            SysComms: 9,
            SysComputers: 11,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 8,
            SysWeapons: 8,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 4,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nebula Class",
            Class: "Nebula Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Saucer Separation",
          
            SysComms: 11,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 8,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 4,
            DeptConn: 1,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation New Orleans Class",
            Class: "New Orleans Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "High-Resolution Sensors\nModular Laboratories",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 8,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 1,
            DeptEngineering: 4,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Niagara Class",
            Class: "Niagara Class",
            Scale: 5,
            Traits: "Federation Starship\nCutting Edge (2358 - 2360)",
            Talents: "High-Resolution Sensors\nImproved Warp Drive",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 4,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Norway Class",
            Class: "Norway Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Advanced Sickbay\nEmergency Medical Hologram",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 11,
            SysStructure: 10,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 4,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nova Class",
            Class: "Nova Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "Advanced Sensor Suites",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 8,
            SysWeapons: 8,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 4,
            DeptMedical: 3,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Olympic Class",
            Class: "Olympic Class",
            Scale: 4,
            Traits: "Federation Starship\nNon-Combatant",
            Talents: "Advanced Sickbay\nDedicated Personnel (Medicine)\nModular Laboratories",
          
            SysComms: 10,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 11,
            SysStructure: 9,
            SysWeapons: 7,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 1,
            DeptScience: 3,
            DeptMedical: 5,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Raven Class",
            Class: "Raven Class",
            Scale: 2,
            Traits: "Federation Starship",
            Talents: "Advanced Sensor Suites",
          
            SysComms: 11,
            SysComputers: 11,
            SysEngines: 8,
            SysSensors: 11,
            SysStructure: 7,
            SysWeapons: 5,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 1,
            DeptEngineering: 3,
            DeptScience: 5,
            DeptMedical: 3,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Saber Class",
            Class: "Saber Class",
            Scale: 3,
            Traits: "Federation Starship",
            Talents: "High-Power Tractor Beam\nImproved Impulse Drive",
          
            SysComms: 10,
            SysComputers: 9,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 4,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Springfield Class",
            Class: "Springfield Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "High-Resolution Sensors\nRugged Design",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 12,
            SysStructure: 8,
            SysWeapons: 8,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Steamrunner Class",
            Class: "Steamrunner Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Advanced Sensor Suites\nImproved Warp Drive",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 1,
            DeptConn: 3,
            DeptSecurity: 3,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Klingon K'Vort Class Bird of Prey",
            Class: "K'Vort Class Bird of Prey",
            Scale: 5,
            Traits: "Klingon Bird of Prey",
            Talents: "Rugged Design\nImproved Reaction Control System\nCloaking Device",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 9,
            SysSensors: 8,
            SysStructure: 8,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 4,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Klingon Empire",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },
        {
            Name: "Klingon Vor'Cha Class Attack Cruiser",
            Class: "Vor'Cha Class Attack Cruiser",
            Scale: 5,
            Traits: "Klingon Attack Cruiser",
            Talents: "Command Ship\nImproved Hull Integrity\nCloaking Device",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 9,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 4,
            DeptEngineering: 2,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Klingon Empire",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },
        {
            Name: "Romulan D'Deridex Class Warbird",
            Class: "D'Deridex Class Warbird",
            Scale: 6,
            Traits: "Romulan Warbird",
            Talents: "Cloaking Device",
          
            SysComms: 9,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 11,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "TNG",
            Faction: "Romulan Star Empire",
            Type: "Starship",

            Notes: "Stats from Core Rulebook"
        },

        //Picard Era - PIC
        {
            Name: "Federation Gagarin Class",
            Class: "Gagarin Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Improved Damage Control\nRedundant Systems",

            SysComms: 9,
            SysComputers: 9,
            SysEngines: 12,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 12,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 4,
            DeptEngineering: 3,
            DeptScience: 1,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Luna Class",
            Class: "Luna Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Advanced Research Facilities\nAdvanced Sensor Suites\nEmergency Medical Hologram",

            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 12,
            SysStructure: 8,
            SysWeapons: 8,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },        
        {
            Name: "Federation Inquiry Class",
            Class: "Inquiry Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Ablative Armour\nImproved Power Systems\nImproved Warp Drive",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 11,
            SysStructure: 10,
            SysWeapons: 9,
          
            DeptCommand: 4,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },        
        {
            Name: "Federation Odyssey Class",
            Class: "Odyssey Class",
            Scale: 7,
            Traits: "Federation Starship",
            Talents: "Command Ship\nRedundant Systems (Engines)\nSaucer Separation",
          
            SysComms: 11,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 11,
            SysWeapons: 10,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 4,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Pathfinder Class",
            Class: "Pathfinder Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "High-Resolution Sensors",
          
            SysComms: 9,
            SysComputers: 11,
            SysEngines: 11,
            SysSensors: 11,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 4,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 4,
            DeptMedical: 1,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Prometheus Class",
            Class: "Promethus Class",
            Scale: 4,
            Traits: "Federation Starship\nTop of the Line (2375-2380)",
            Talents: "Multi-Vector Assault Mode\nRedundant Systems (Engines)",
          
            SysComms: 9,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 9,
            SysStructure: 10,
            SysWeapons: 12,
          
            DeptCommand: 3,
            DeptConn: 1,
            DeptSecurity: 4,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Reliant Class",
            Class: "Reliant Class",
            Scale: 4,
            Traits: "Federation Starship",
            Talents: "Extensive Shuttlebays\nRedundant Systems",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 4,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Ross Class",
            Class: "Ross Class",
            Scale: 6,
            Traits: "Federation Starship",
            Talents: "Diplomatic Suites\nSaucer Separation\nSecondary Reactors",
          
            SysComms: 10,
            SysComputers: 10,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 10,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 3,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Soverign Class",
            Class: "Soverign Class",
            Scale: 6,
            Traits: "Federation Starship",
            Talents: "Command Ship\nEmergency Medical Hologram\nImproved Warp Drive",
          
            SysComms: 10,
            SysComputers: 9,
            SysEngines: 10,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 10,
          
            DeptCommand: 4,
            DeptConn: 1,
            DeptSecurity: 3,
            DeptEngineering: 2,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Sutherland Class",
            Class: "Sutherland Class",
            Scale: 5,
            Traits: "Federation Starship",
            Talents: "Saucer Separation",
          
            SysComms: 11,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 14,
            SysStructure: 10,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 4,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Vesta Class",
            Class: "Vesta Class",
            Scale: 6,
            Traits: "Federation Starship\nState of the Art (2380s)",
            Talents: "Advanced Shields\nImproved Warp Drive\nSecondary Reactors",
          
            SysComms: 10,
            SysComputers: 12,
            SysEngines: 12,
            SysSensors: 10,
            SysStructure: 9,
            SysWeapons: 9,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "PIC",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Deep Space 9 (Terok Nor)",
            Class: "Nor Class",
            Scale: 12,
            Traits: "Cardassian Mining Station\nFederation-run Bajoran-owned\nStation at the mouth of the Wormhole",
          
            SysComms: 10,
            SysComputers: 11,
            SysEngines: 11,
            SysSensors: 10,
            SysStructure: 14,
            SysWeapons: 12,
          
            DeptCommand: 5,
            DeptConn: 3,
            DeptSecurity: 4,
            DeptEngineering: 5,
            DeptScience: 4,
            DeptMedical: 4,  
          
            Era: "TNG",
            Faction: "Unique",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Starbase 364 (Narendra Station)",
            Class: "Narendra Type",
            Scale: 13,
            Traits: "Federation Starbase\nJointly Owned (Federation/Klingon)\nGateway to the Shackleton Expanse\n20th Fleet Headquarters",
          
            SysComms: 11,
            SysComputers: 11,
            SysEngines: 10,
            SysSensors: 14,
            SysStructure: 14,
            SysWeapons: 11,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 2,
            DeptScience: 2,
            DeptMedical: 3,  
          
            Era: "TNG",
            Faction: "Unique",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Border Listening Post",
            Class: "Border Listening Post",
            Scale: 8,
            Traits: "Federation Station",
          
            SysComms: 8,
            SysComputers: 8,
            SysEngines: 9,
            SysSensors: 12,
            SysStructure: 9,
            SysWeapons: 10,
          
            DeptCommand: 2,
            DeptConn: 1,
            DeptSecurity: 4,
            DeptEngineering: 1,
            DeptScience: 4,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Federation Subspace Communications Relay",
            Class: "Subspace Communications Relay",
            Scale: 6,
            Traits: "Federation Station\nCommunications Relay",
          
            SysComms: 14,
            SysComputers: 11,
            SysEngines: 7,
            SysSensors: 8,
            SysStructure: 6,
            SysWeapons: 4,
          
            DeptCommand: 5,
            DeptConn: 1,
            DeptSecurity: 1,
            DeptEngineering: 1,
            DeptScience: 4,
            DeptMedical: 1,  
          
            Era: "TNG",
            Faction: "Federation",
            Type: "Station",

            Notes: "Stats from Utopia Planitia Book"
        },
        {
            Name: "Crystalline Entity",
            Class: "Crystalline Entity",
            Scale: 10,
          
            SysComms: 6,
            SysComputers: 4,
            SysEngines: 8,
            SysSensors: 9,
            SysStructure: 15,
            SysWeapons: 8,
          
            DeptCommand: 3,
            DeptConn: 3,
            DeptSecurity: 0,
            DeptEngineering: 0,
            DeptScience: 0,
            DeptMedical: 0,  
          
            Era: "TNG",
            Faction: "Unique",
            Type: "Special",

            Notes: "Stats from Core Rulebook"
        },

        //32nd Century - 32c
        {
            Name: "Federation Angelou Class",
            Class: "Angelou Class",
            Scale: 5,
            Traits: "Federation Starship\nIMT-C",
          
            SysComms: 7,
            SysComputers: 6,
            SysEngines: 6,
            SysSensors: 7,
            SysStructure: 8,
            SysWeapons: 6,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 3,  
          
            Era: "32c",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Eisenberg Class",
            Class: "Eisenberg Class",
            Scale: 4,
            Traits: "Federation Starship\nIMT-C",
          
            SysComms: 7,
            SysComputers: 7,
            SysEngines: 7,
            SysSensors: 6,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 4,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "32c",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Friendship Class",
            Class: "Friendship Class",
            Scale: 4,
            Traits: "Federation Starship\nIMT-C",
          
            SysComms: 6,
            SysComputers: 6,
            SysEngines: 7,
            SysSensors: 7,
            SysStructure: 6,
            SysWeapons: 6,
          
            DeptCommand: 2,
            DeptConn: 3,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 3,
            DeptMedical: 2,  
          
            Era: "32c",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Janeway Class",
            Class: "Janeway Class",
            Scale: 4,
            Traits: "Federation Starship\nIMT-C",
          
            SysComms: 7,
            SysComputers: 6,
            SysEngines: 7,
            SysSensors: 8,
            SysStructure: 6,
            SysWeapons: 5,
          
            DeptCommand: 2,
            DeptConn: 2,
            DeptSecurity: 2,
            DeptEngineering: 3,
            DeptScience: 4,
            DeptMedical: 2,  
          
            Era: "32c",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Kirk Class",
            Class: "Kirk Class",
            Scale: 4,
            Traits: "Federation Starship\nIMT-C",
          
            SysComms: 6,
            SysComputers: 6,
            SysEngines: 7,
            SysSensors: 6,
            SysStructure: 6,
            SysWeapons: 8,
          
            DeptCommand: 3,
            DeptConn: 2,
            DeptSecurity: 3,
            DeptEngineering: 3,
            DeptScience: 2,
            DeptMedical: 2,  
          
            Era: "32c",
            Faction: "Federation",
            Type: "Starship",

            Notes: "Stats from Captain's Log Book"
        },
    ];
}
