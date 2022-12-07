export const beersSchema = `#graphql
type Query {
  beers: [Beer!]!
  beer(id: ID!): Beer
}

type Mutation {
  addBeer(beer: BeerInput!): [Beer!]!
}

type Beer {
  id: ID!
  title: String
  brands: String
  volume: Float
}

input BeerInput {
  id: ID
  title: String
  brands: String
  volume: Float
}
`;
