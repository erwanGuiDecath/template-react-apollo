export const beersSchema = `#graphql
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

type Query {
  beers: [Beer!]!
  beer: Beer
}

type Mutation {
  addBeer(beer: BeerInput!): [Beer!]!
}
`;
