import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  marginBottom: 30
}));
export default function Input({ onChange, selectOptions, onSelectChange }: any) {
  return (
    <Grid justifyContent="space-between"
    spacing={3} sx={{ pt: 5 }} container>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        <Item>
          <input onChange={(e) => onChange(e.target.value)} placeholder="Search for a country..." className="input-search" />
        </Item>
      </Grid>
      <Grid item xl={3} lg={3} md={3} sm={3} xs={12}>
        <Item>
          <select className="input-search" onChange={(e)=>onSelectChange(e.target.value)} name="Filter by Region">
          <option value={"Filter by Region"}>Filter by Region</option>
            {
              selectOptions.map((item:string, index:number)=>(
                <option key={index} value={item}>{item}</option>
              ))
            }
           
          </select>
        </Item>
      </Grid>
    </Grid>
  );
}
