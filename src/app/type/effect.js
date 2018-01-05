module.exports = `
    enum EffectType {
        Poison
        Spell
        Illness
    }

    type EffectDirection {
        facing: DieRoll # Die must be 6
        range: DieRoll # plusMinus val Must be -1
    }

    type Effect implements BaseType {
        _id: ID! @IsUnique
        name: String!
        image: String
        sound: String
        description: String!
        type: EffectType
        image: String
        stat: String
        # Omit value to use die roll
        # die can only be 4, 6, 8, 10, 12, 20
        # If value is set, you can omit all die properties
        value: DieRoll
        radius: DieRoll
        direction: EffectDirection
        duration: DieRoll
        cures: [Spell]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        effects: [Effect!]
        effect(id: ID): Effect
    }

    type Mutation {
        createEffect(name: String!): Effect!
    }
`;
