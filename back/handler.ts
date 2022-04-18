import { readFileSync } from 'fs';
import { ApolloServer } from 'apollo-server-lambda';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { addResolversToSchema } from '@graphql-tools/schema';

// https://www.graphql-code-generator.com/docs/guides/graphql-server-apollo-yoga
const typeDefs = readFileSync('./graphql/weather.graphql', 'utf8');

// Load schema from the file
// const schema = loadSchemaSync('graphql/**/*.graphql', {
//   loaders: [new GraphQLFileLoader()]
// });

// Write some resolvers
// const resolvers = {};

// Add resolvers to the schema
// const schemaWithResolvers = addResolversToSchema({
//   schema,
//   resolvers
// });

// Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     response: Response
//   }

//   type Response {
//     current: Current
//     timezone: String
//     lat: Float
//     lon: Float
//     daily: [Daily]
//   }

//   type Daily {
//     weather: Weather
//     dt: Float
//     temp: Temp
//   }

//   type Current {
//     humidity: String
//     pressure: String
//     sunrise: String
//     sunset: String
//     wind_speed: String
//   }

//   type Weather {
//     id: ID
//     main: String
//     description: String
//     icon: String
//   }

//   type Wind {
//       speed: Float
//       deg: Float
//   }

//   type Temp {
//     night: Float
//     day: Float
//   }
// `;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();


// import { APIGatewayProxyHandler } from 'aws-lambda';
// import 'source-map-support/register';

// export const hello: APIGatewayProxyHandler = async (event, _context) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
//       input: event,
//     }, null, 2),
//   };
// }
