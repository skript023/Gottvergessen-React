import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import Header from "../../component/header";
import { useTheme } from "@mui/material";
import {useEffect, useState} from 'react'

const Contacts = () => {
    const [backend_data, set_backend_data] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=12")
        .then(res => res.json())
        .then(data => {
            set_backend_data(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
        },
        {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        },
        {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
        },
        {
        field: "email",
        headerName: "Email",
        flex: 1,
        },
        {
        field: "address",
        headerName: "Address",
        flex: 1,
        },
        {
        field: "city",
        headerName: "City",
        flex: 1,
        },
        {
        field: "zipCode",
        headerName: "Zip Code",
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