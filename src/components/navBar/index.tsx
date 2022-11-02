import * as React from 'react';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
interface Props {
    colorMode?: any;
}



export default function NavBar({ colorMode }: Props) {
    const label = { inputProps: { 'aria-label': 'Size switch demo' } };
    const AppBar = styled(Paper)(({ theme }) => ({
        backgroundColor: colorMode?.currentTheme === 'dark' ? 'hsl(209, 23%, 22%)' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        marginBottom: 30
    }));
    return (
        <AppBar>
            <Grid container>
                <Grid xs={11} sm={11} md={11}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} color={colorMode?.currentTheme === 'dark' ? "#fff" : "#000"} noWrap>
                    Where in the world?
                    </Typography>

                </Grid>
                <Grid xs={1} sm={1} md={1}>
                    <Typography variant="h6" color="inherit" noWrap>
                        <FormGroup>
                            <FormControlLabel style={{color:colorMode?.currentTheme === 'dark' ? "#fff" : "#000"}} label="Dark Mode" control={<Switch
                                onClick={colorMode.toggleColorMode} color={colorMode?.currentTheme === 'dark' ? "default" : "primary"}
                                {...label}
                                defaultChecked={colorMode?.currentTheme === 'dark'} />} />
                        </FormGroup>
                    </Typography>
                </Grid>
                </Grid>


        </AppBar >
            );
}
