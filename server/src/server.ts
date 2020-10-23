import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import Express from 'express';
import mongoose from 'mongoose';
import { execute, subscribe } from 'graphql';
import connectRedis from 'connect-redis';
import cors from 'cors';

import { RedisDB } from './utils/RedisDB';
import { createSchema } from './utils/createSchema';
import { fieldExtensionsEstimator, getComplexity, simpleEstimator } from 'graphql-query-complexity';
import { graphqlUploadExpress } from 'graphql-upload';
import { ExpressContext } from './@types/ExpressContext';
import { SubscriptionServer } from 'subscriptions-transport-ws'

const PORT = 4000 || process.env.PORT;
import { MONGODB } from './config';
import session from 'express-session';
import { createServer } from 'http';

const main = async () => {

    mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MONGODB CONNECTED'))

    const schema = await createSchema();
    const apolloServer = new ApolloServer({ 
        schema, 
        context: ({ req, res }: ExpressContext) => ({ req, res }),
        uploads: false,
        plugins: [
            {
              requestDidStart: () => ({
                didResolveOperation({ request, document }) {

                  const complexity = getComplexity({
                    schema,
                    operationName: request.operationName,
                    query: document,
                    variables: request.variables,
                    estimators: [
                      fieldExtensionsEstimator(),
                      simpleEstimator({ defaultComplexity: 1 }),
                    ],
                  });
                  if (complexity > 20) {
                    throw new Error(
                      `Sorry, too complicated query! ${complexity} is over 20 that is the max allowed complexity.`,
                    );
                  }
                  console.log("Used query complexity points:", complexity);
                },
              }),
            },
          ],
    });
    
    const app = Express();


    app.use(graphqlUploadExpress({ maxFileSize: 2000000, maxFiles: 1 }));

    const RedisStore = connectRedis(session);

    app.use(
        cors({
            credentials: true,
            origin: 'http://localhost:3000'
        })
    );

    app.use(    
        session({
            store: new RedisStore({
              client: RedisDB
            }),
            name: "userId",
            secret: "$2y$14$K3Ag5ncJkmzlmt3.hBu9pOa8lD/cwKO2VcGhtKqvghzaJHQfJ.fte",
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 2 * 365
            },
      })
    );

    apolloServer.applyMiddleware({ app });
    const server = createServer(app);

    server.listen(PORT, () => {
        console.log(`SERVER IS RUNNING RIGHT NOW, HERE IS THE LINK: http://localhost:${PORT}/graphql`);
    });
    SubscriptionServer.create({ schema, execute, subscribe }, { server })

}

main()