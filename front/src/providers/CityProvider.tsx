import React, { createContext, ReactNode } from 'react';
import { useSafeState } from 'ahooks';
import { CombinedError } from 'urql';

export const CityContext = createContext({
  city: 'London',
  setCity: function(value: string) {},
  cityError: (undefined as CombinedError | undefined),
  setCityError: function(value: CombinedError | undefined) {},
});

const CityProvider = function ({ children }: { children: ReactNode }) {
  const [city, setCity] = useSafeState('London');
  const [cityError, setCityError] = useSafeState<CombinedError | undefined>();

  return (
    <CityContext.Provider
      value={{
        city,
        setCity: (city: string) => {
          setCity(city);
        },
        cityError,
        setCityError: (cityError: CombinedError | undefined) => {
          setCityError(cityError);
        },
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
