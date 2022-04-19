/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from 'react';
import { useInterval } from 'ahooks';
import { css } from '@emotion/react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { UseQueryState } from 'urql';
import { red } from '@mui/material/colors';

import { CityContext } from '../providers/CityProvider';
import { WeatherByCityQuery } from '../generated';

interface TodaysDataProps {
  result: UseQueryState<WeatherByCityQuery, { city: string; }> 
}

const TodaysData = ({ result }: TodaysDataProps) => {
  const { city, setCityError } = useContext(CityContext);
  
  const [humidity, setHumidity] = useState('');
  const [pressure, setPressure] = useState('');
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [windspeed, setWindspeed] = useState('');
  
  const [timeNow, setTimeNow] = useState('');
  const [dateNow, setDateNow] = useState('');

  useEffect(() => {
    setDateNow(
      format(new Date(), "EEEE d MMMM", { locale: fr })
    );
  }, []);
  
  useInterval(() => {
    const newTimeNow = format(new Date(), "HH':'mm", { locale: fr });
    setTimeNow(newTimeNow);
  }, 1000);
  
  const { data, fetching, error } = result;

  useEffect(() => {
    setHumidity(`${data?.weatherByCity?.current?.humidity || '--'} %`);
    setPressure(`${data?.weatherByCity?.current?.pressure || '--'} hPa`);
    setSunrise(data?.weatherByCity?.current?.sunrise ?
      format(new Date(parseInt(data.weatherByCity.current.sunrise, 10) * 1000), "HH':'mm") :
      '--'
    );
    setSunset(data?.weatherByCity?.current?.sunset ?
      format(new Date(parseInt(data.weatherByCity.current.sunset, 10) * 1000), "HH':'mm") :
      '--'
    );
    setWindspeed(`${data?.weatherByCity?.current?.wind_speed || '--'} m/s`);

    setCityError(error);
  }, [data, error, setCityError]);

  if (fetching) return <p>Chargement...</p>;
  if (error) return (
    <p
      css={{
        color: red.A700,
        fontWeight: 500,
        fontSize: '1rem',
      }}
    >Une erreur s'est produite</p>
  );

  return (
    <div>
      <Typography
        variant="h2"
        component="span"
        css={{
          display: "block",
        }}
      >
        {`${timeNow} - ${city}`}
      </Typography>
      <Typography
        variant="h4"
        component="span"
        css={{
          display: "block",
        }}
      >
        {dateNow}
      </Typography>
      <Paper
        elevation={0}
        variant="outlined"
        css={{
          paddingLeft: "20px",
          paddingRight: "20px",
          marginTop: '20px',
        }}
      >
        <dl
          css={css`
            display: grid;
            grid-template-columns: max-content auto;
            gap: 4px 20px;

            dd {
              justify-self: end;
            }
          `}
        >
          <Typography component="dt">Humidité</Typography>
          <Typography component="dd">{humidity}</Typography>
          <Typography component="dt">Pression</Typography>
          <Typography component="dd">{pressure}</Typography>
          <Typography component="dt">Vitesse du vent</Typography>
          <Typography component="dd">{windspeed}</Typography>
          <Typography component="dt">Lever du soleil</Typography>
          <Typography component="dd">{sunrise}</Typography>
          <Typography component="dt">Coucher du soleil</Typography>
          <Typography component="dd">{sunset}</Typography>
        </dl>
      </Paper>
    </div>
  );
}

export default TodaysData;
