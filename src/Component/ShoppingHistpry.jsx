import { react, useState, useEffect } from 'react'
import { Box, Grid, IconButton, Input, Menu, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { Button } from '@mui/material'
import DashboardNavbar from "./Dashboard/examples/Navbars/DashboardNavbar";
import HistoryUser from '../Component/Historial/HistoryUserShopping'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TablaContent from './Historial/TablaContent';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Customer from './Historial/Customer/Customer'
import DataPrueba from './Historial/DataPrueba'
// import MDBox from "../Dashboard/components/MDBox";
import MDBox from './Dashboard/components/MDBox'
import UrlApi from '../globals';
import DataHistory from './Historial/DataHistoryTable'


const ShoppingHistory = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[800]),
        backgroundColor: indigo[800],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    }));

    const [User, setUser] = useState([])

    const handlesearch = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let objData = {
            Email: data.get('id'),
          };
        axios.get(UrlApi + "/users", objData)
            .then(response => {

                setUser(response.data)
                // console.log(response.data)

            }).catch(err => {
                swal({
                    title: "Not Server Connection!",
                    text: "Products can’t be search!",
                    icon: "error",
                    button: "Ok"
                })
                console.log(err)
            })
    }



    // useEffect(() => {

    //     peticionGet();



    // }, [handleSubmit])



    return (
        <>
            <DashboardNavbar />
            <MDBox sx={{
                margin: '20rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'right',
                mx: 'auto',
                width: 900,
                p: 1,
                m: 4,
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '0px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                textAlign: 'left',
                fontSize: '0.875rem',
                fontWeight: '900',
                alignContent: 'center',
                backgroundColor: 'black'
            }}>
                <h1 style={{ color: 'white' }}>Shopping History</h1>
                <MDBox component="form" noValidate
                    sx={{
                        margin: '1rem',
                        marginTop: '0rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mx: 'auto',
                        width: 800,
                        bgcolor: (theme) =>
                            theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '0px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        backgroundColor: 'transparent',
                        textAlign: 'left',
                    }}>
                    <Grid container spacing={1}>
                        <Grid item xs={10} md={6} lg={3}>
                            <CardActionArea component="a" >
                                <Card sx={{ display: 'flex', }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h5">
                                            All received
                                        </Typography>
                                        <Typography style={{ color: 'blue' }}>
                                            <BeenhereIcon style={{ margin: '0.50rem' }}></BeenhereIcon>
                                            10,500
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>

                        <Grid item xs={10} md={6} lg={3}>
                            <CardActionArea component="a" >
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h5">
                                            Returned
                                        </Typography>
                                        <Typography style={{ color: 'red' }}>
                                            <CancelIcon style={{ margin: '0.50rem' }}></CancelIcon>
                                            5
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>

                        <Grid item xs={10} md={6} lg={3}>
                            <CardActionArea component="a" >
                                <Card sx={{ display: 'flex' }}>
                                    <CardContent sx={{ flex: 5 }}>
                                        <Typography component="h3" variant="h5">
                                            User
                                        </Typography>
                                        <Typography style={{ color: 'green' }}>
                                            <AddBoxIcon style={{ margin: '0.50rem' }}></AddBoxIcon>
                                            5,000
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </CardActionArea>
                        </Grid>
                        {/*Final de los Contenidos del Grid */}
                        <MDBox sx={{
                            margin: '1rem',
                            marginTop: '1rem',

                        }}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        fullWidth
                                        id='name'
                                        type="string"
                                        label="User Name"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        fullWidth
                                        id="outlined-number"
                                        label=" Desde"
                                        type='date'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <TextField
                                        fullWidth
                                        id="outlined-number"
                                        label="Fecha Hasta"
                                        type='date'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <ColorButton variant="outlined" >
                                        <SearchIcon sx={{ fontSize: 40 }}></SearchIcon>
                                    </ColorButton>
                                </Grid >
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        type="email"
                                    />

                                </Grid>
                            </Grid>
                        </MDBox>
                        <MDBox sx={{
                            margin: '1rem',
                            marginTop: '1rem',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mx: 'auto',
                            width: 800,
                            bgcolor: (theme) =>
                                theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            border: '0px solid',
                            borderColor: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                            backgroundColor: 'transparent',
                            textAlign: 'left',
                        }}>
                            {/* <TablaContent></TablaContent> */}
                            <HistoryUser User={User}></HistoryUser>
                            {/* <Customer></Customer> */}
                            {/* <DataPrueba></DataPrueba> */}

                            <DataHistory User={User}/>
                            
                          
                        </MDBox>
                    </Grid>
                </MDBox>
            </MDBox>

        </>
    )
}

export default ShoppingHistory