module.exports = `
    enum AreaType {
        Unknown
        Clearing
        Town
        Village
        Swamp
        Foothills
        Hill_Low
        Hills_Rolling
        Mountain_Low
    }

    type Area implements BaseType {
        _id: ID! @isUnique
        name: String
        buildings: [Building]
        region: Region
        type: AreaType
        coverIdx: Int
        elevation: Int
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        areas: [Area!]
        area(id: ID): Area
    }

    type Mutation {
        createArea(name: String!): Area!
    }

`;