module.exports = `
    type Article implements BaseType {
        _id: ID! @isUnique
		name: String
		description: String
		body: String
		author: Player
        createdOn: DateTime
        createdBy: String
        modifiedOn: DateTime
        modifiedBy: String
        modifiedByIP: String
        del: Boolean
    }

    type Query {
        articles: [Article!]
        article(id: ID): Article
	}

    type Mutation {
        createArticle(name:String, description:String, body:String): Article
    }

`;