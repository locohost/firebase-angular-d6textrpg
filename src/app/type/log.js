module.exports = `
    enum LogType {
        Info
        Warning
        Issue
        Error
        Critical
    }

    type Log implements BaseType {
        _id: ID! @IsUnique
        type: LogType
        text: String!
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        logs: [Log!]
        log(id: ID): Log
    }

    type Mutation {
        createLog(name: String!): Log!
    }
`;