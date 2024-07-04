import { Asset } from '../database/database.service';

export class MasterAssetList{
    public MasterAssetList: Asset[] = [
        //Enterprise Era - ENT
        {
            Name: "Federation Deadalus Class",
            Class: "Deadalus Class",
            Scale: 3,
            Traits: "United Earth/Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Intrepid Class (22nd Century)",
            Class: "Intrepid Class (22nd Century)",
            Scale: 3,
            Traits: "United Earth Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation NX Class",
            Class: "NX Class",
            Scale: 3,
            Traits: "United Earth/Federation Starship\nState of the Art",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Warp Delta Class",
            Class: "Warp Delta Class",
            Scale: 3,
            Traits: "United Earth Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },

        //The Original Series Era - TOS
        {
            Name: "Federation Antares Class",
            Class: "Antares Class",
            Scale: 2,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Archer Class",
            Class: "Archer Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Cardenas Class",
            Class: "Cardenas Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Constitution Class",
            Class: "Constitution Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Crossfield Class",
            Class: "Crossfield Class",
            Scale: 4,
            Traits: "Federation Starship\nExperimental",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Eagle Class",
            Class: "Eagle Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Hiawatha Class",
            Class: "Hiawatha Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Hoover Class",
            Class: "Hoover Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Magee Class",
            Class: "Magee Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Malachowski Class",
            Class: "Malachowski Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Miranda Class",
            Class: "Miranda Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nimitz Class",
            Class: "Nimitz Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Oberth Class",
            Class: "Oberth Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        //Scout Type, likely saladin class, add later
        {
            Name: "Federation Shepard Class",
            Class: "Shepard Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Soyouz Class",
            Class: "Soyouz Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Sydney Class",
            Class: "Sydney Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Walker Class",
            Class: "Walker Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },

        //TNG/DS9/VOY Era
        {
            Name: "Federation Akira Class",
            Class: "Akira Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Ambassador Class",
            Class: "Ambassador Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Challenger Class",
            Class: "Challenger Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Cheyenne Class",
            Class: "Cheyenne Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Constellarion Class",
            Class: "Constellation Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Defiant Class",
            Class: "Defiant Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Excelsior Class",
            Class: "Excelsior Class",
            Scale: 5,
            Traits: "Federation Starship\nThe Great Experiment",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Freedom Class",
            Class: "Freedom Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Galaxy Class",
            Class: "Galaxy Class",
            Scale: 6,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Intrepid Class",
            Class: "Intrepid Class",
            Scale: 4,
            Traits: "Federation Starship\nTop of the Line (2370)",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nebula Class",
            Class: "Nebula Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation New Orleans Class",
            Class: "New Orleans Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Niagara Class",
            Class: "Niagara Class",
            Scale: 5,
            Traits: "Federation Starship\nCutting Edge (2358 - 2360)",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Norway Class",
            Class: "Norway Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Nova Class",
            Class: "Nova Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Olympic Class",
            Class: "Olympic Class",
            Scale: 4,
            Traits: "Federation Starship\nNon-Combatant",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Raven Class",
            Class: "Raven Class",
            Scale: 2,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Saber Class",
            Class: "Saber Class",
            Scale: 3,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Springfield Class",
            Class: "Springfield Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Steamrunner Class",
            Class: "Steamrunner Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },

        //Picard Era - PIC
        {
            Name: "Federation Gagarin Class",
            Class: "Gagarin Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Luna Class",
            Class: "Luna Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },        
        {
            Name: "Federation Inquiry Class",
            Class: "Inquiry Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },        
        {
            Name: "Federation Odyssey Class",
            Class: "Odyssey Class",
            Scale: 7,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Pathfinder Class",
            Class: "Pathfinder Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Prometheus Class",
            Class: "Promethus Class",
            Scale: 4,
            Traits: "Federation Starship\nTop of the Line (2375-2380)",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Reliant Class",
            Class: "Reliant Class",
            Scale: 4,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Ross Class",
            Class: "Ross Class",
            Scale: 6,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Soverign Class",
            Class: "Soverign Class",
            Scale: 6,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Sutherland Class",
            Class: "Sutherland Class",
            Scale: 5,
            Traits: "Federation Starship",
          
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

            Notes: "Stats from Captain's Log Book"
        },
        {
            Name: "Federation Vesta Class",
            Class: "Vesta Class",
            Scale: 6,
            Traits: "Federation Starship\nState of the Art (2380s)",
          
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

            Notes: "Stats from Captain's Log Book"
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

            Notes: "Stats from Captain's Log Book"
        },
    ];
}
