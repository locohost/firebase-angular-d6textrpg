module.exports = `
    enum RewardType {
        Reward
        Treasure
        Reputation
        Knowledge
        Experience
        Stats
        Magic
    }

    interface Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardReward implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardReputation implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardTreasure implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardKnowledge implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardExperience implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardStats implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type RewardMagic implements Reward {
        _id: ID! @IsUnique
        name: String!
        description: String!
        image: String
        type: RewardType
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        rewards: [Reward!]
        reward(id: ID): Reward
    }

    type Mutation {
        createReward(name: String!): Reward!
    }
`;
