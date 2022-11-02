import React, { useContext, useEffect, useState } from "react";
import { ColorModeContext } from '../../App';
import { getCountries, getCountriesByRegion } from "../../services";
import { Card, NavBar, Search as SearchAndDropDown } from '../../components'
import { Container, CircularProgress } from "@mui/material";
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Link
} from "react-router-dom";

const theme = createTheme();

const Regions = [
  "Africa",
  "America",
  "Asia",
  "Rurope",
  "Oceania"
]

export default function Listing() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [region, setRegion] = useState("Filter by Region");
  const colorMode = useContext(ColorModeContext);

  const _getListingFilterByRegion = (e: string) => {
    setloading(true)
    getCountriesByRegion(e)
      .then(res => {
        setData(res?.data)
      })
      .then(res => {
        setloading(false)
      })
      .catch(err => {
        setloading(false)
      })
  }

  const _getListing = () => {
    setloading(true)
    getCountries()
      .then(res => {
        setData(res?.data)
      })
      .then(res => {
        setloading(false)
      })
      .catch(err => {
        setloading(false)
      })
  }

  const _onSearch = (e: string) => {
    setloading(true)
    if (e.length && region === "Filter by Region") {
      getCountries()
        .then(res => {
          let { data } = res;
          if (data?.length) {
            let filterData = data.filter((x: any) => {
              let formatedText = x?.name?.common.toLocaleLowerCase();
              let formatedSearchText = e.toLocaleLowerCase();
              return formatedText.includes(formatedSearchText)
            })
            setData(filterData)
          }
        })
        .then(res => {
          setloading(false)
        })
        .catch(err => {
          setloading(false)
        })
    }
    else {

      if (region !== "Filter by Region") {
        getCountriesByRegion(region)
          .then(res => {
            let { data } = res;
            if (data?.length) {
              let filterData = data.filter((x: any) => {
                let formatedText = x?.name?.common.toLocaleLowerCase();
                let formatedSearchText = e.toLocaleLowerCase();
                return formatedText.includes(formatedSearchText)
              })
              setData(filterData)
            }
          })
          .then(res => {
            setloading(false)
          })
          .catch(err => {
            setloading(false)
          })
      }
      else {
        getCountries()
        .then(res => {
          let { data } = res;
          if (data?.length) {
            let filterData = data.filter((x: any) => {
              let formatedText = x?.name?.common.toLocaleLowerCase();
              let formatedSearchText = e.toLocaleLowerCase();
              return formatedText.includes(formatedSearchText)
            })
            setData(filterData)
          }
        })
        .then(res => {
          setloading(false)
        })
        .catch(err => {
          setloading(false)
        })
      }
    }
  }


  const _onSelectChange = (e: any) => {
    setRegion(e)
  }

  useEffect(() => {
    _getListing()
  }, [])

  useEffect(() => {
    if (region === "Filter by Region") {
      _getListing()
    }
    else {
      _getListingFilterByRegion(region)
    }
  }, [region])

  return (
    <ThemeProvider theme={theme}>
      <NavBar colorMode={colorMode} />
      <main>
        <Container maxWidth="lg">
          {loading && <CircularProgress />}
          <SearchAndDropDown selectOptions={Regions} onSelectChange={_onSelectChange} onChange={_onSearch} />


          <Grid sx={{pb:10}} container spacing={{ md: 4, xs: 4, sm: 4 }}>
            {data.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3} lg={3}>
                <Link style={{ textDecoration: 'none' }} state={item} to="/detail">
                  <Card colorMode={colorMode} item={item} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
