export const pageBuilderSchema = `#graphql
scalar JSON

type Query {
  pages(type: TypePagesEnum!): [Page!]!
}

type Page {
  id: ID!
  name: String!
  title: String
  url: String
}

type Context {
  id: ID!
  type: String!
  subType: String!
  value: String
}

type Container {
  id: ID!
  name: String
  type: TypeContainerEnum
  contexts: [Context!]!
}

enum TypeContainerEnum {
  LAYOUT
  COMPONENTS
  TEMPLATE
}

type Component {
  id: ID!
  type: String!
  name: String!
  jsonSchema: JSON
}
`;
