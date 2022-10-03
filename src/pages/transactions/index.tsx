import * as React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import { Typography } from '@mui/material'
import Breadcrumbs from 'nextjs-breadcrumbs'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

const VISIBLE_FIELDS = ['id', 'Avatar', 'name', 'rating', 'country', 'dateCreated', 'isAdmin']

const Breadcrumb = () => {
  return <Breadcrumbs useDefaultStyle replaceCharacterList={[{ from: '-', to: ' ' }]} rootLabel='Home' />
}

export default function BasicExampleDataGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100
  })

  return (
    <ApexChartWrapper sx={{ mt: -10 }}>
      <Typography variant='caption' sx={{ ml: 2 }}>
        <Breadcrumb />
      </Typography>

      <div style={{ height: 520, width: '100%' }}>
        <DataGrid {...data} components={{ Toolbar: GridToolbar }} />
      </div>
    </ApexChartWrapper>
  )
}
