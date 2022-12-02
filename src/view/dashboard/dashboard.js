import {useEffect} from 'react'
import {Box} from '@mui/material'
import Headers from '../component/header'

const Dashboard = (props) =>
{
    useEffect(() => {
        document.title = props.title || "React App";
    }, [props.title]);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alighItems="center">
            <Headers subtitle="Welcome to Dashboard"/>
            </Box>
        </Box>
    );
}

export default Dashboard;