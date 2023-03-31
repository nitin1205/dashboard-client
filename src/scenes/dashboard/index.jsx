import { 
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic 
} from '@mui/icons-material';
import { Box, Button , Typography, useTheme, useMediaQuery } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import BreakdownChart from 'components/BreakdownChart';

import { useGetDashboardQuery } from 'state/api';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';

const Dashboard = () => {
  const theme = useTheme();
  const isNOnMediumScreens = useMediaQuery('(min-width: 1200px)');

  const { data, isLoading } = useGetDashboardQuery();

  const columns  = [
    {
        field: '_id',
        headerName: "ID",
        flex: 1,
    },
    {
        field: 'userId',
        headerName: 'User Id',
        flex: 0.5,
    },
    {
        field: 'createdAt',
        headerName: 'created At',
        flex:1,
    },
    {
        field: 'products',
        headerName: '# of Products',
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length
    },
    {
        field: 'cost',
        headerName: 'Cost',
        flex: 1,
        renderCell: (params) => `${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m='1.5rem 2.5rem'>
      <FlexBetween>
        <Header title='Dashboard' subtitle='Welcome to your dashboard' />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.background.alt,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px'
            }}
          >
            <DownloadOutlined sx={{ mr: '10px'}}/>
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default Dashboard;