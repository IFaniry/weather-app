/** @jsxImportSource @emotion/react */
import { useState, useContext, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import { Query } from 'urql';
import { usePrevious } from 'ahooks';

import TodaysData from './components/TodaysData';
import CitySelect from './components/CitySelect';
import { CityContext } from './providers/CityProvider';
import { WeatherByCityDocument } from './generated';

function App() {
  const { city } = useContext(CityContext);
  const previousCity = usePrevious(city);
  const [showTodaysData, setShowTodaysData] = useState(false);
  
  useLayoutEffect(() => {
    if (
      // TODO: à revoir
      city?.trim() !== '' &&
      city?.length >= 2 &&
      city !== undefined
    ) {
      // Données météo vides
      setShowTodaysData(true);
    } else {
      // Données météo disponibles
      setShowTodaysData(false);
    }
  }, [city]);

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        height: "85vh",
        margin: "40px auto 0px auto",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-between",
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        {(
          <Query
            query={WeatherByCityDocument}
            variables={{
              city: showTodaysData ?
                city :
                (previousCity || 'London')
            }}
          >
            {(result) => <TodaysData result={result} />}
          </Query>
        )}
        <CitySelect />
      </Box>
    </Box>
  );
}

export default App;
