module.exports = `
    enum ItemType {
        Unknown
        Weapon
        Armor
        Clothing
        Container
        Gem
        Coin
        Tool
        Animal
        Boat
    }

    type ItemWeight {
        pounds: Int
        ounces: Int
    }

    type Item implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: ItemType
        value: Coins
        size: Size
        encumberance: Int 
        weight: ItemWeight 
        unique: Boolean 
        condition: String 
        customizations: String,
        customizationsValue: Coins
        contains: [Item]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        items: [Item!]
        item(id: ID): Item
    }

    type Mutation {
        createItem(name: String!): Item!
    }
`;