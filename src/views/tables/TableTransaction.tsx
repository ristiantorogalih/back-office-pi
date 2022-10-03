// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableSortLabel from '@mui/material/TableSortLabel'
import { Link } from 'mdi-material-ui'

interface Column {
  id:
    | 'trxdatetime'
    | 'serverdatetime'
    | 'terminalcode'
    | 'cardnumber'
    | 'proccode'
    | 'issuer'
    | 'acquirer'
    | 'biller'
    | 'respcode'
    | 'refnumber'
    | 'trxamount'
    | 'feeamount'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'trxdatetime', label: 'Trx Date Time', minWidth: 50 },
  { id: 'serverdatetime', label: 'Server Date Time', minWidth: 50 },
  {
    id: 'issuer',
    label: 'Issuer',
    minWidth: 20
  },
  {
    id: 'acquirer',
    label: 'Acquirer',
    minWidth: 20
  },
  {
    id: 'biller',
    label: 'Biller Aggregator',
    minWidth: 20
  },
  {
    id: 'terminalcode',
    label: 'Terminal Code',
    minWidth: 50
  },
  {
    id: 'cardnumber',
    label: 'Card Number',
    minWidth: 50
  },
  {
    id: 'refnumber',
    label: 'Reference Number',
    minWidth: 50
  },
  {
    id: 'proccode',
    label: 'Trx Type',
    minWidth: 50
  },
  {
    id: 'trxamount',
    label: 'Trx Amount',
    minWidth: 50,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  },
  {
    id: 'feeamount',
    label: 'Fee Amount',
    minWidth: 50,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US')
  }
]

interface Data {
  trxdatetime: string
  serverdatetime: string
  issuer: string
  acquirer: string
  biller: string
  terminalcode: string
  cardnumber: string
  refnumber: string
  proccode: string
  trxamount: number
  feeamount: number
}

function createData(
  trxdatetime: string,
  serverdatetime: string,
  issuer: string,
  acquirer: string,
  biller: string,
  terminalcode: string,
  cardnumber: string,
  refnumber: string,
  proccode: string,
  trxamount: number,
  feeamount: number
): Data {
  return {
    trxdatetime,
    serverdatetime,
    issuer,
    acquirer,
    biller,
    terminalcode,
    cardnumber,
    refnumber,
    proccode,
    trxamount,
    feeamount
  }
}

const rows = [
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  ),
  createData(
    '2022-09-30 23:59:59',
    '2022-09-30 23:59:59',
    'BJB',
    'BJB',
    'RJB',
    'BJBDIGI01',
    '341*****9472',
    '124234',
    '181000',
    100000,
    2500
  )
]

const TableTransaction = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.serverdatetime}>
                  {columns.map(column => {
                    const value = row[column.id]

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                  <TableCell>
                    <Link component='button' variant='body2' href='/'>
                      Button Link
                    </Link>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableTransaction
