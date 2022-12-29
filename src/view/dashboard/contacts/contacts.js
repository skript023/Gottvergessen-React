import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../../component/header";
import { useTheme } from "@mui/material";
import {useEffect, useState} from 'react'
import axios from '../../../api/axios'
import useAuth from '../../hooks/authentication'

const Contacts = () => {
    const {auth} = useAuth()
    const [backend_data, set_backend_data] = useState([])
    useEffect(() => {
        axios.get("/contact/all", {headers: {"Authorization": `Bearer ${auth.token}`}})
        .then(res => res.data)
        .then(data => {
            set_backend_data(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [auth.token])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "fullname",
            headerName: "fullname",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "message",
            headerName: "message",
            flex: 1,
        },
        
    ];

    return (
        <Box m="20px">
            <Header
            title="CONTACTS"
            subtitle="List of Contacts for Future Reference"
        />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
                >
                <DataGrid
                    rows={backend_data}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
            />
            </Box>
        </Box>
    );
};

export default Contacts;