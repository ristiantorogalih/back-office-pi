import { Typography, CardHeader } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Grid'
import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import TableTransaction from 'src/views/tables/TableTransaction'

const Breadcrumb = () => {
  return <Breadcrumbs useDefaultStyle replaceCharacterList={[{ from: '-', to: ' ' }]} rootLabel='Home' />
}

const Transactions = () => {
  return (
    <ApexChartWrapper sx={{ mt: -10 }}>
      <Typography variant='caption' sx={{ ml: 2 }}>
        <Breadcrumb />
      </Typography>

      <Grid container spacing={6} sx={{ pt: 0.5 }}>
        <Grid item xs={12} md={12}>
          <Card>
            <TableTransaction />
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Transactions
