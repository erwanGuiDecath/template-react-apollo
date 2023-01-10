import { GraphQLScalarType } from 'graphql';
import { Page, PbComponentLink, PbComponentsGroupLink, PbComponentVariant, PbComponentVariantLink, PbPageStructure } from '../../api/strapi/strapi.types';
import { Container, Resolvers } from '../../types/common.types';

const jsonScalar = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar type',
  serialize(value: Object) {
    return value
  },
  parseValue(value: string) {
    return JSON.parse(value);
  },
});

export const pageBuilderResolver: Resolvers = {
  JSON: jsonScalar,
  Query: {
    pages(type, args: any, ctx) {
      return ctx.dataSources.strapiAPI.getPages();
    },
  },

  Page: {
    id: (page: Page): string => page.pageId,
    published: (page: Page): boolean => Boolean(page.active),
    container: (page: Page): Container | undefined => {
      if (!page.pb_page_structures || page.pb_page_structures.length === 0) return

      return {
        ...page.pb_page_structures[0],
        type: 'LAYOUT'
      }
    }
  },

  Container: {
    __resolveType(container: Container): string {
      switch (container.type) {
        case 'COMPONENTS': return 'ContainerComponents'
        case 'LAYOUT': return 'ContainerLayout'
        case 'TEMPLATE': return 'ContainerTemplate'
        default: throw new Error('Impossible to have a empty type on Container');
      }
    }
  },

  ContainerLayout: {
    containers: (pbPageStructure: PbPageStructure): Container[] => {
      if (!pbPageStructure?.componentGroupsLinks) return []

      return pbPageStructure.componentGroupsLinks.map((componentsGroup: PbComponentLink | PbComponentsGroupLink): Container => ({
        ...(componentsGroup as PbComponentLink).pb_component,
        type: 'COMPONENTS'
      }))
    }
  },

  ContainerComponents: {
    components: async (pbComponent: PbComponentLink, args, ctx): Promise<PbComponentVariant[] | undefined> => {
      const floor = await ctx.dataSources.strapiAPI.getFloor(pbComponent.id);
      if (!floor.variants) return

      const promises = floor.variants.map(async (pbComponentVariantLink: PbComponentVariantLink) => {
        const pbComponentVariant = await ctx.dataSources.strapiAPI.getVariant(pbComponentVariantLink.id);
        if (!pbComponentVariant) throw new Error (`Impossible to find pbComponentVariant with id : ${pbComponentVariantLink.id}`)
  
        return pbComponentVariant
      })

      return Promise.all(promises)
    },
  },

  Component: {
    jsonSchema: async (pbComponentVariant: PbComponentVariant) => pbComponentVariant.pb_render_component.jsonSchema,
    type: async (pbComponentVariant: PbComponentVariant) => pbComponentVariant.pb_render_component.type,
  }
};
