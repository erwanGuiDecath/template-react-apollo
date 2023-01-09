export const pageBuilderSchema = `#graphql
scalar JSON

type Query {
  pages(type: TypePageEnum!): [Page!]!
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

interface Container {
  id: ID!
  name: String
  type: TypeContainerEnum
  contexts: [Context!]!
}

type ContainerLayout implements Container {
  id: ID!
  name: String
  type: TypeContainerEnum
  contexts: [Context!]!
  containers: [Container!]!
  flexDirection: FlexDirectionEnum
}

type ContainerComponents implements Container {
  id: ID!
  name: String
  type: TypeContainerEnum
  contexts: [Context!]!
  components: [Component!]!
}

type ContainerTemplate implements Container {
  id: ID!
  name: String
  description: String
  type: TypeContainerEnum
  scope: ScopeContainerEnum
  contexts: [Context!]!
  containers: [Container!]!
  flexDirection: FlexDirectionEnum
}

enum FlexDirectionEnum {
  column
  row
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
