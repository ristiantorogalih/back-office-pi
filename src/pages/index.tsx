// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { Alert, Charity, Close, ContentSave, Handshake, Newspaper } from 'mdi-material-ui'
import { Typography } from '@mui/material'
import Breadcrumbs from 'nextjs-breadcrumbs'

const Breadcrumb = () => {
  return <Breadcrumbs useDefaultStyle replaceCharacterList={[{ from: '-', to: ' ' }]} rootLabel='Home' />
}

const Dashboard = () => {
  return (
    <ApexChartWrapper sx={{ mt: -10 }}>
      <Typography variant='caption' sx={{ ml: 2 }}>
        <Breadcrumb />
      </Typography>

      <Grid container spacing={6} sx={{ pt: 0.5 }}>
        {/* <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid> */}
        {/* <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid> */}
        <Grid item xs={12} md={6} lg={6}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid container spacing={6}>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='5 item(s)'
                icon={<Close />}
                color='error'
                title='Closed Today'
                subtitle='closed by today'
              />
            </Grid>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='15 item(s)'
                title='Closed this Week'
                color='warning'
                subtitle='closed within a week'
                icon={<Alert />}
              />
            </Grid>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='862 item(s)'
                title='Need Approval'
                subtitle='Waiting for Approval'
                icon={<Handshake />}
              />
            </Grid>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='15 item(s)'
                color='secondary'
                subtitle='New Claims'
                title='Created New Claims'
                icon={<Newspaper />}
              />
            </Grid>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='15 item(s)'
                color='secondary'
                subtitle='New Claims'
                title='New Proactive'
                icon={<Charity />}
              />
            </Grid>
            <Grid item xs={4}>
              <CardStatisticsVerticalComponent
                stats='15 item(s)'
                color='secondary'
                subtitle='New Claims'
                title='New Other Claims'
                icon={<ContentSave />}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid> */}
        {/* <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid> */}
        {/* <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
