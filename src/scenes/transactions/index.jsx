import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, useTheme } from '@mui/material';

import { useGetTransactionQuery } from 'state/api';
import Header from 'components/Header';

const Transactions = () => {
    const theme = useTheme();

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState('');

    // const { data, isLoading } = useGetTransactionQuery({ 
    //     page, 
    //     pageSize, 
    //     sort: JSON.stringify(sort), 
    //     search 
    // });
    const { data, isLoading } = useGetTransactionQuery();
    console.log(data);
    return (
        <div>Transactions</div>
    );
};

export default Transactions;