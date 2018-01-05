module.exports = `
    enum BuildingType {
        Keep
        Castle
        Dungeon_Level
        Ruin
        Hut
        House
        Store
        Tavern
        Inn
        Manor
        Shop
    }

    type Building implements BaseType {
        _id: ID! @isUnique
        name: String!
        description: String!
        image: String
        area: Area
        rooms: [Room]
        type: BuildingType!
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        buildings: [Building!]
        building: Building!
    }

    type Mutation {
        createBuilding(name: String!): Building!
    }
`;
