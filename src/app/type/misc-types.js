module.exports = `
    scalar DateTime
    
    interface BaseType {
        _id: ID!
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type DieRoll {
        value: Int
        die: Int # die can only be 4, 6, 8, 10, 12, 20
        howMany: Int
        plusMinus: Int
    }

    type Coins {
        gold: Int
        silver: Int
        copper: Int
    }

    type Size {
        l: Float
        w: Float
        h: Float
    }

`;
