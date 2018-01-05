module.exports = `
    enum RoomType {
        Bedroom
        Kitchen
        Hallway
        Dining
        Drinking
        Cavern
        Cell
        Privy
        Study
        Library
        Storage
    }

    type Room implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RoomType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        rooms: [Room!]
        room(id: ID): Room
    }

    type Mutation {
        createRoom(name: String!): Room!
    }
`;