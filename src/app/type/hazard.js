module.exports = `
    enum HazardType {
        River
        Cliff
        Slope
        Pit
        Trap
    }

    type Hazard implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        type: HazardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        hazards: [Hazard!]
        hazard(id: ID): Hazard
    }

    type Mutation {
        createHazard(name: String!): Hazard!
    }
`;