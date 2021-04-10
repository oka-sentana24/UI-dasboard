import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Layout from '../../components/layout/layout';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  new:{
    padding:"20px",
    textAlign:"end"
  }
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Siswa() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  const classes = useStyles();
  return (
    <Layout>
        <Grid item xs={12}>
            <div className={classes.new}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                className={classes.button}
                startIcon={<FilterListIcon />}
              >
                Filter
              </Button>
              <Link href="/siswa/create">
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                  startIcon={<AddIcon />}
                >
                  New
                </Button>
              </Link>
            </div>
        </Grid>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
      <h1>CANDRA</h1>
    </Layout>
  );
}
