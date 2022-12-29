import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../component/header";
import {useEffect, useState} from 'react'
import axios from '../../../api/axios'
import useAuth from '../../hooks/authentication'
import Joaat from '../../helper/joaat'

const Team = () => {
    const {auth} = useAuth()
    const [backend_data, set_backend_data] = useState([])
    useEffect(() => {
        axios.post("/user/all", {role: Joaat(auth.user.user_role.role)}, {headers: {"Authorization": `Bearer ${auth.token}`}})
        .then(res => res.data.users)
        .then(data => {
            set_backend_data(data)
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, [auth.user.user_role.role, auth.token])

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
    { field: "id", headerName: "ID" },
    {
        field: "fullname",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
    },
    {
        field: "username",
        headerName: "Username",
        flex: 1,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 0.5,
    },
    {
        field: "user_role",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({ row: { user_role } }) => {
        return (
            <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                    user_role.id === 4
                    ? colors.greenAccent[600]
                    : user_role.id === 2
                    ? colors.greenAccent[700]
                    : colors.redAccent[700]
                }
                borderRadius="4px"
                >
                {user_role.id === 4 && <AdminPanelSettingsOutlinedIcon />}
                {user_role.id === 2 && <SecurityOutlinedIcon />}
                {user_role.id === 1 && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                    {user_role.role}
                </Typography>
            </Box>
            );
        },
    },
];

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
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
            }}
            >
                <DataGrid checkboxSelection rows={backend_data} columns={columns} />
            </Box>
        </Box>
    );
};

export default Team;