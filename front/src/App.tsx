/** @jsxImportSource @emotion/react */
// import styled from '@emotion/styled';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TodaysData from './components/TodaysData';

function App() {
    return (
            <Box
                sx={{
                    maxWidth: '1200px',
                    height: '85vh',
                    margin: '40px auto 0px auto',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <TodaysData />
                    <Typography variant="h3" component="h2">
                        Aujourddddddddhui
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h3" component="h2">
                        Mon pays
                    </Typography>
                    <Typography variant="h3" component="h2">
                        Aujourddddddddhui
                    </Typography>
                </Box>
            </Box>
    );
}

export default App;
