module.exports = `
    enum NPCType {
        Unknown
    }

    type NPCPhraseAttitude {
        ease: String
        cautious: String
        fearful: String
    }

    # Links to Characters this NPC has met and remembers
    type NPCCharsKnown {
        character: Character
        emotion: Int # 0=Hate 1=Dislike 2=Neutral 3=Like 4=Love
        says: String
    }

    # Links to other NPCs this NPC knows about
    type NPCOtherNPCsKnown {
        npc: NPC
        emotion: Int # 0=Hate 1=Dislike 2=Neutral 3=Like 4=Love
        says: String
    }

    type NPCPhrase {
        firstmeet: NPCPhraseAttitude # Says upon first meeting based on feeling
        latermeet: NPCPhraseAttitude # Chars this NPC met before
        npcsknown: [NPCOtherNPCsKnown] 
    }

    type NPC implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: NPCType
        node: Node # Where is NPC in game world? Link to node.model
        facing: Int  # Direction facing within the node
        typeId: String # Link to npc-type.model
        appearance: NPCAppear 
        # Things NPC might say to Characters and/or responses to questions...
        phrase: NPCPhrase
        charsknown: [NPCCharsKnown] 
        alignment: CharNPCAlign
        stat: CharNPCStats
        languages: [CharNPCLang] # Links to charnpc-lang
        classes: [CharNPCClass] # Link to charnpc-class(es)
        carrying: [CharNPCItemCarrying]
        inventory: CharNPCItemInventory # Links to NPCs NPC owns/stores
        notes: String
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        npcs: [NPC!]
        npc(id: ID): NPC
    }

    type Mutation {
        createNPC(name: String!): NPC!
    }
`;