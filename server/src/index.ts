import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

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
  cors<cors.CorsRequest>(),
  // 50mb is the limit that `startStandaloneServer` uses, but you may configure this to suit your needs
  bodyParser.json({ limit: '50mb' }),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
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
console.log(`🚀 Server ready at http://localhost:4000/`);
