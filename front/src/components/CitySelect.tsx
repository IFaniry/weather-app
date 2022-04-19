/** @jsxImportSource @emotion/react */
import { useState, useContext, SyntheticEvent } from 'react';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { red } from '@mui/material/colors';

import { CityContext } from '../providers/CityProvider';

const CitySelect = () => {
  const { setCity, cityError } = useContext(CityContext);

  const [displayedCity, setDisplayedCity] = useState('');

  return (
      <form
        css={{
          flex: '0 1 500px',
          padding: '20px',
        }}
        onSubmit={(event: SyntheticEvent) => {
          event.preventDefault();

          // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
          const target = event.target as typeof event.target & {
            city: { value: string };
          };
          const submitedCity = target.city.value;

          setCity(submitedCity);
        }}
      >
        <FormControl sx={{ m: 1, width: 'max(250px, 100%)' }} variant="outlined">
          <InputLabel
            htmlFor="city-input"
            color="info"
          >Entrez un nom de ville</InputLabel>
          <OutlinedInput
            type="text"
            fullWidth
            size='medium'
            id="city-input"
            value={displayedCity}
            onChange={(event) => { 
              setDisplayedCity((event.target as HTMLInputElement).value);
            }}
            endAdornment={
              <InputAdornment position="end">
                {/* Evitez de mettre un onClick handler ici */}
                <IconButton
                  type="submit"
                  aria-label="prévoir la météo pour une ville"
                  edge="end"
                >
                  <LocationOnIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Entrez un nom de ville"
            color="info"
            name="city"
            error={Boolean(cityError)}
          />
          {Boolean(cityError) && (
            <Typography
              variant="caption"
              component="span"
              css={{
                display: "block",
                color: red[500]
              }}
            >
              {Boolean(cityError) ? "Un erreur s'est produite" : ''}
            </Typography>
          )}
        </FormControl>
      </form>
  );
}

export default CitySelect;
