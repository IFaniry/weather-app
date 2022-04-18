import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    response: Response
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
`
