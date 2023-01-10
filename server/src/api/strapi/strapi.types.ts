export type Page = {
  pageId: string
  name: string
  path: string
  navigation: PageType
  entity: any
  pb_page_structures: PbPageStructure[]
  active: boolean
  redirectUrl: string
  redirectStatusCode: number
}

export enum PageType {
  "account",
  "category",
  "dimensions",
  "order",
  "page",
  "product",
  "sphereContent",
  "sphereContentLegacy",
  "store",
  "shipping",
  "payment",
  "confirmation",
  "partner"
}

export type PbPageStructure = {
  name: string
  template: string
  pb_contexts?: PbContext[]
  pb_components_groups: PbComponentsGroup[]
  componentGroupsLinks: PbComponentLink[] | PbComponentsGroupLink[]
}

export interface Link {
  id: string
}

export interface PbComponentLink extends Link {
  pb_component: PbComponent
}

export interface PbComponentsGroupLink extends Link {
  pb_components_groups: PbComponentsGroup
}

export interface PbComponentVariantLink extends Link {
  pb_component_variant: PbComponentVariant
}

export type ExecutionContext = {
  priority: number
  storeIds: string
  from: Date
  to: Date
  supermodelIds: string
  paths: string
  categories: string
  variations: any
}

export type VisualComponentsReference = {
  visual_components?: VisualComponent[],
  name?: string
}

export type VisualComponent = {
  executionContext: ExecutionContext,
  componentSelection: Component[]
  name: string
}

export interface Component {}

export type PbContext = {
  name: string
  storeIds?: string
  from?: Date
  to?: Date
  path?: string
  entityRule?: any,
  custom?: any
}

export type PbComponentsGroup = {
  name: string
  pb_components_group_variants: PbComponentsGroupVariant[]
}

export type PbComponentsGroupVariant = {
  name: string
  pb_contexts: PbContext[]
  pb_components: PbComponent[]
  componentsLinks: PbComponentLink[]
}

export type PbComponent = {
  name: string,
  pb_component_variants: PbComponentVariant[]
  variants: PbComponentVariantLink[]
}

export type PbComponentVariant = {
  id: string
  name: string
  componentVariantId: string
  personalizationCampaigns?: string
  values: TranslationValue[]
  pb_render_component: PbRenderComponent
  pb_contexts?: PbContext[]
  pb_components?: PbComponent[]
}

export type TranslationValue = {
  id: number
  locale: locale
  data: any
}

export enum locale {
  "fr_BE",
  "nl_BE",
  "de_DE",
  "es_ES",
  "ca_ES",
  "fr_CH",
  "de_CH",
  "fr_FR",
  "en_GB",
  "nl_NL",
  "en_HK",
  "zh_HK",
  "pl_PL",
  "pt_PT",
  "it_IT",
  "cs_CZ",
  "ro_RO",
  "tr_TR",
  "hu_HU"
}

export type PbRenderComponent = {
  type: string
  jsonSchema: Object,
  scope?: any
}

export type NemoUser = {
  uid: string
  roles: NemoRole[]
}

export type NemoRole = {
  uid: string
  rights: NemoRight[]
}

export type NemoRight = {
  resource: NemoRightResource
  action: NemoRightAction
  designation: string
}

export enum NemoRightResource {
  "landing",
  "library",
  "publish",
  "sticker",
  "page",
  "homePage"
}

export enum NemoRightAction {
  "read",
  "create",
  "update",
  "delete"
}
