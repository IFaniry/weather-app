/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function TodaysData() {
  return (
    <div>
        <Typography
            variant="h2"
            component="span"
            css={{
                display: 'block'
            }}
        >
            18:51
        </Typography>
        <Typography
            variant="h4"
            component="span"
            css={{
                display: 'block'
            }}
        >
            Samedi 16 avril
        </Typography>
        <Paper
            elevation={1}
            variant="outlined"
            css={{
                paddingLeft: '20px',
                paddingRight: '20px',
            }}
        >
            <dl
                css={css`
                    display: grid;
                    grid-template-columns: max-content auto;
                    gap: 4px 0;

                    dd {
                        justify-self: end;
                    }
                `}
            >
                <Typography
                    component="dt"
                >
                    Humidité
                </Typography>
                <Typography
                    component="dd"
                >
                    XXXX
                </Typography>
                <Typography
                    component="dt"
                >
                    Pression
                </Typography>
                <Typography
                    component="dd"
                >
                    XXXX
                </Typography>
                <Typography
                    component="dt"
                >
                    Vitesse du vent
                </Typography>
                <Typography
                    component="dd"
                >
                    XXXX
                </Typography>
                <Typography
                    component="dt"
                >
                    Lever du soleil
                </Typography>
                <Typography
                    component="dd"
                >
                    XXXX
                </Typography>
                <Typography
                    component="dt"
                >
                    Coucher du soleil
                </Typography>
                <Typography
                    component="dd"
                >
                    XXXX
                </Typography>
            </dl>
        </Paper>
    </div>
  );
}

export default TodaysData;
