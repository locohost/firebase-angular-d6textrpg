module.exports = `
    enum RegionType {
        Unknown
        Continent
        Country
        Island
    }

    type RegionDescription {
        summary: String
        inhabitants: String
        economy: String
        climate: String
    }

    type Region implements BaseType {
        _id: ID! @isUnique
        name: String!
        description: RegionDescription
        type: RegionType
        world: World
        areas: [Area]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        regions: [Region!]
        region(id: ID): Region
    }

    type Mutation {
        createRegion(name: String!): Region!
    }
`;