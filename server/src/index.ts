import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';

import { BeersAPI, PageBuilderAPI, StrapiAPI } from './api';
import { typeDefs, resolvers } from './schemas';
import { AppContext } from './types/common.types';

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<AppContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  '/graphql',
  expressMiddleware(server, {
    context: async ({ req }) => ({
      token: req.headers.token,
      dataSources: {
        beersAPI: new BeersAPI(),
        pageBuilderAPI: new PageBuilderAPI(),
        strapiAPI: new StrapiAPI(),
      },
    }),
  }),
);

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Express server ready at http://localhost:4000/`);
console.log(`🚀 Apollo server ready at http://localhost:4000/graphql`);
