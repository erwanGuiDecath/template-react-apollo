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
  type: TypePageEnum
}

enum TypePageEnum {
  HOME
  LANDING
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
  description: String
  type: TypeContainerEnum
  scope: ScopeContainerEnum
  contexts: [Context!]!
}

enum TypeContainerEnum {
  LAYOUT
  COMPONENTS
  TEMPLATE
}

enum ScopeContainerEnum {
  DEFAULT
  LISTING
  LANDING
}

type Component {
  id: ID!
  type: String!
  name: String!
  jsonSchema: JSON
  values: JSON
}
`;
