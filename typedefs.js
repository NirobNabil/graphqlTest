const { gql } = require('apollo-server');

module.exports.typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    type Artist {
        name: String,
        id: Int, 
    }

    # This "Book" type defines the queryable fields for every book in our data source.
    type Post {
        title: String
        artists: [Artist]
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
        posts: [Post]
    }
`;