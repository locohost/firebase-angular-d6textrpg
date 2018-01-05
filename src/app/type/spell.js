module.exports = `
    enum SpellType {
        Explosion
        Lightning
        Fire
        Healing
        Resurection
    }

    type SpellComponent {
        verbal: Boolean
        material: Boolean
        somatic: Boolean
    }

    type Spell implements BaseType {
        _id: ID!
        name: String!        
        description: String!
        type: SpellType
        sound: String # Link to sound file
        # Verbal, caster cannot be gagged or silenced
        # Material, caster must have her spell components pouch
        # Somatic, caster must have at least 1 hand free
        component: SpellComponent
        effects: [Effect]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        spells: [Spell!]
        spell(id: ID): Spell
    }

    type Mutation {
        createSpell(name: String!): Spell!
    }
`;
