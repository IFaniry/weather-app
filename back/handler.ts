import { ApolloServer, gql } from 'apollo-server-lambda';
import axios from 'axios';

import { Resolvers } from './resolvers-types';

require('dotenv').config();

const FRONTEND_URL = 'https://willy-appli-meteo.netlify.app';

const typeDefs = gql`
  type Query {
    weatherByCity(city: String!): Response
  }

  type Response {
    current: Current
    timezone: String
    lat: Float
    lon: Float
    daily: [Daily]
  }

  type Daily {
    weather: Weather
    dt: Float
    temp: Temp
  }

  type Current {
    humidity: String
    pressure: String
    sunrise: String
    sunset: String
    wind_speed: String
  }

  type Weather {
    id: ID
    main: String
    description: String
    icon: String
  }

  type Wind {
      speed: Float
      deg: Float
  }

  type Temp {
    night: Float
    day: Float
  }
`;

const resolvers: Resolvers = {
  Query: {
    weatherByCity: async (_, { city }) => {
      let cityLat = Infinity;
      let cityLon = Infinity;
      // Geocoding
      // https://openweathermap.org/api/geocoding-api
      // ex.: http://api.openweathermap.org/geo/1.0/direct?q=Londres&limit=1&appid=f825344b0cf0672c689378549f9868db
      try {
        const { data: geocodingData } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPEN_WEATHER_API_KEY}`);

        if (geocodingData.length) {
          cityLat = geocodingData[0].lat;
          cityLon = geocodingData[0].lon;
        }
      } catch (error) {
        console.error('error', error);
        throw new Error(error);
      }

      if (!isFinite(cityLat)) {
        throw new Error('Pays non trouvé');
      }
      
      // Prévision
      // https://openweathermap.org/api/one-call-api#data
      // ex.: https://api.openweathermap.org/data/2.5/onecall?lat=-27.7126212&lon=-67.1355516&exclude=hourly,minutely&units=metric&appid=f825344b0cf0672c689378549f9868db
      try {
        const { data: forecastingData } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&exclude=hourly,minutely&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`);
        
        return {
          lat: forecastingData.lat,
          lon: forecastingData.lon,
          current: {
            humidity: forecastingData.current.humidity,
            pressure: forecastingData.current.pressure,
            sunrise: forecastingData.current.sunrise,
            sunset: forecastingData.current.sunset,
            wind_speed: forecastingData.current.wind_speed,
          },
          timezone: forecastingData.timezone,
          // TODO: peut être plus sélectif
          daily: forecastingData.daily,
        };
      } catch (error) {
        console.error('error', error);
        throw new Error(error);
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: FRONTEND_URL,
      credentials: true,
    },
  },
});
