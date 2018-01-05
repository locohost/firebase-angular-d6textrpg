module.exports = `
    type ModuleGoal implements BaseType {
        _id: ID! @IsUnique
        name: String!
        description: String!
        module: Module
        type: ModuleGoalType
        rewards: [Reward]
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    enum ModuleGoalType {
        Rescue
        Find
        Deliver
        Find_Then_Deliver
        Destroy
    }    

    type Query {
        moduleGoals: [ModuleGoal!]
        moduleGoal(id: ID): ModuleGoal
    }

    type Mutation {
        createModuleGoal(name: String!): ModuleGoal!
    }
`;
