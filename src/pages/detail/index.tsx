import React, { useContext } from "react";
import { Grid, Typography, Button } from "@mui/material";
import Container from '@mui/material/Container';
import {
  Link,
  useLocation
} from "react-router-dom";
import { ColorModeContext } from "../../App";
import {  NavBar } from '../../components'

function Detail() {
  const colorMode = useContext(ColorModeContext);

  const location = useLocation();
  const item = location?.state;
  if (!item?.name) {
    return <h1>Data is not available!</h1>
  }
  return (
    <>
      <NavBar colorMode={colorMode} />

    <Container sx={{ py: 8 }} maxWidth="xl">
      <Link style={{ textDecoration: 'none' }} to="/">
        <Button style={{
          background: colorMode?.currentTheme === 'dark' ? "hsl(209, 23%, 22%)" : "#fff",
          color: colorMode?.currentTheme === 'dark' ? "#fff" : "#000"
        }} sx={{ mb: 8 }} variant="contained">Back</Button>
      </Link>

      <Grid container xs={12} sm={12} md={12} spacing={{ sm: 1, md: 10, lg: 10, xl: 10, xs: 1 }}>
        <Grid item md={6} xs={12} sm={12}>
          <img className="detailPage-flagImage" src={item?.flags?.svg} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography color={colorMode?.currentTheme === 'dark' ? "#fff" : "#000"} sx={{ pb: 0, fontWeight: 'bold', pt: 5 }} textAlign="left" gutterBottom variant="h5" component="div">
            {item?.name?.official}
          </Typography>
          <Grid maxWidth="sm" container item>
            <Grid item lg={6} md={6} xs={12}>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Native Name: <span style={{ fontWeight: 'normal' }}>{item?.name?.nativeName?.eng?.official}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Population: <span style={{ fontWeight: 'normal' }}>{item?.population}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Region: <span style={{ fontWeight: 'normal' }}>{item?.region}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Sub Region: <span style={{ fontWeight: 'normal' }}>{item?.subregion}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Capital: <span style={{ fontWeight: 'normal' }}>{item?.capital[0]}</span></h5>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Top Level Domain: <span style={{ fontWeight: 'normal' }}>{item?.tld[0]}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Currencies: <span style={{ fontWeight: 'normal' }}>{item?.currencies?.BBD?.name}</span></h5>
              <h5 className={colorMode?.currentTheme === 'dark' ? "detailPage-flagContent colorWhite" : "detailPage-flagContent"}>Languages: <span style={{ fontWeight: 'normal' }}>{item?.languages?.eng}</span></h5>
            </Grid>
            <Grid alignItems="center" display="flex" lg={3} md={3} xs={12}>
              <Typography color={colorMode?.currentTheme === 'dark' ? "#fff" : "#000"} gutterBottom sx={{ fontSize: 16 }} textAlign="left" variant="h5" component="div">
                Border Countries:
              </Typography>

            </Grid>
            <Grid item lg={9} md={9} xs={12}>
              {
                item?.borders?.map((item: any, index: number) => (
                  <Button style={{
                    background: colorMode?.currentTheme === 'dark' ? "hsl(209, 23%, 22%)" : "#fff",
                    color: colorMode?.currentTheme === 'dark' ? "#fff" : "#000"
                  }} key={index} sx={{ m: 0.5, p: 0 }} variant="contained">{item}</Button>
                ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>
  );
}

export default Detail;
