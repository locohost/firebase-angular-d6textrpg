module.exports = `
    enum Reputation {
        Loved
        Liked
        Indifferent
        Disliked
        Hated
        Feared
    }

    enum CharNPCAlign {
        Lawful_Good
        Lawful_Evil
        Neutral
        Chaotic_Good
        Lawful_Good
    }

    enum CharNPCClass {
        Fighter
        Barbarian
        Wizard
        Illusionist
        Cleric
        Thief
        Ninja
        Bard
        Rogue
        Paladin
    }
    
    enum CharNPCLang {
        Common
        Elvish
        Orcish
        Dwarvish
        Globin
    }
    
    enum CharNPCRace {
        Human
        Elf
        Orc
        Dwarf
        Halfling
    }
    
    enum CharNPCSize {
        Tiny
        Short
        Man_Size
        Huge
        Giant
    }

    type CharNPCRepArea implements BaseType {
        _id: ID! @isUnique
        area: Area
        reputation: Reputation
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }
    
    type CharNPCRepBuilding implements BaseType {
        _id: ID! @isUnique
        building: Building
        reputation: Reputation
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }
    
    type CharNPCRepRegion implements BaseType {
        _id: ID! @isUnique
        region: Region
        reputation: Reputation
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }
    
    type CharNPCItemCarrying implements BaseType {
        _id: ID! @IsUnique
        character: Character
        item: Item
        quantity: Int
        where: String
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }
    
    type CharNPCItemInventory implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        room: Room
        node: Node
        items: [Item]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }
    
    type CharWarning implements BaseType {
        _id: ID! @IsUnique
        character: Character
        text: String!
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type CharAppearSummary {
        close: String 
        near: String
        far: String
    }

    type CharAppear {
        summary: CharAppearSummary
        image: String
        race: CharNPCRace
        size: CharNPCSize
        face: String
        body: String
        clothing: String
        weapons: String
        armor: String
        equipment: String
    }

    type CharNPCStats {
        speed: Int 
        vision: Int 
        hearing: Int 
        smell: Int 
        str: Int 
        int: Int 
        wis: Int 
        con: Int 
        dex: Int 
        cha: Int 
        hps: Int 
        exp: Int 
        level: Int 
        poison: Int
    }

    type Character implements BaseType {
        _id: ID! @IsUnique
        name: String!
        player: Player 
        location: Node
        alignment: CharNPCAlign
        classes: [CharNPCClass]
        languages: [CharNPCLang]
        facing: Int
        appearance: CharAppear
        repBuilding: [CharNPCRepBuilding]
        repArea: [CharNPCRepArea]
        repRegion: [CharNPCRepRegion]
        stat: CharNPCStats
        effects: [Effect]
        inventory: CharNPCItemInventory # Links to items NPC owns/stores
        carrying: [CharNPCItemCarrying]
        warnings: [CharWarning] 
        suspended: Boolean 
        suspendReason: String 
        timesPlayed: Int 
        lastPlayed: DateTime 
        notes: String 
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        characters: [Character!]
        character(id: ID): Character
    }

    type Mutation {
        createCharacter(name: String!): Character!
    }
`;