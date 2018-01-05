module.exports = `
    type Player implements BaseType {
        _id: ID! @IsUnique
		name: String!
		handle: String!
		email: String 
		userid: String 
		characters: [Character]
		friends: [Player]

		joined: DateTime 
		lastlogin: DateTime 
		# roles: [Role]
		logins: Int 
		warnings: Int 
		paylevel: Int 
		suspended: Boolean 
		suspendreason: String 
		picurl: String 
		website: String 
		facebook: String 
		twitter: String 
		instagram: String 
		notes: String 

        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        players: [Player!]
        player(id: ID): Player
    }

    type Mutation {
        createPlayer(name: String!, handle: String!, email: String!, userid: String): Player!
    }
`;
