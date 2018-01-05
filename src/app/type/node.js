module.exports = `
    enum NodeType {
        Unknown
    }

    type NodeAppearLook {
        north: String
        east: String
        south: String
        west: String
        up: String
        down: String
    }

    type NodeAppear {
        image: String
        description: String
        # Describe in detail what player sees when looking?...
        looking: NodeAppearLook
    }

    type Node implements BaseType {
        _id: ID! @IsUnique
        name: String!
        type: NodeType
        appearance: NodeAppear
        coverIdx: Int
        howManyFit: Int
        rewards: [Reward]
        hazard: Hazard
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        nodes: [Node!]
        node(id: ID): Node
    }

    type Mutation {
        createNode(name: String!): Node!
    }
`;