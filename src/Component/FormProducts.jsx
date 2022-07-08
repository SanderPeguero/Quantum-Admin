import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Input, Menu, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import DashboardNavbar from "./Dashboard/examples/Navbars/DashboardNavbar";
import Avatar from '@mui/material/Avatar';
import '../Styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../../Logo.png'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import UrlApi from '../globals'


const FormProducts = ({ ProductId, Description, Stock, Cost, Price, Discount, Image, CreationDate, ModificatioDate, Status, Imagenes, product }) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[800]),
        backgroundColor: indigo[800],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    }));

    const [images, setImages] = useState([]);

    ProductId
    Description
    Stock
    Cost
    Price
    Discount
    Image
    CreationDate = new Date().toUTCString()
    ModificatioDate
    Status
    Imagenes

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let objData = {
            ProductId: data.get('IDProducto'),
            Description: data.get('Descripcion'),
            Stock: data.get('CantidadRestante'),
            Cost: data.get('Costo'),
            Price: data.get('Precio'),
            Discount: data.get('Descuento'),
            Image: data.get('QRCode')
            // CreationDate: data.get('FechCreacion'),
            // ModificatioDate: data.get('FechaModificacion'),
            // Status: data.get('estatus'),
            // Imagenes: data.get('imagenes')
        };

        axios.put("https://quantumswap.herokuapp.com/products" ,objData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => { });
    };


  

    const ChangeInput = (e) => {
        let indexImg;

        if (images.length > 0) {
            indexImg = images[images.length - 1].index + 1;
        } else {
            indexImg = 0;
        }

        let newImgsToState = readmultifiles(e, indexImg);
        let newImagsState = [...images, ...newImgsToState];
        setImages(newImagsState);
        console.log(newImagsState);
    }

    function readmultifiles(e, indexInicial) {
        const files = e.currentTarget.files;

        const arrayImages = [];

        Object.keys(files).forEach((i) => {
            const file = files[i];

            let url = URL.createObjectURL(file);

            arrayImages.push({
                index: indexInicial,
                name: file.name,
                url,
                file
            });
            indexInicial++;
        });

        return arrayImages
    }

    function deleteImg(indice) {
        const newImgs = images.filter(function (element) {
            return element.index !== indice;
        });

        console.log(newImgs);
        setImages(newImgs);
    }

    return (

        <>

            <DashboardNavbar />
            <Box sx={{
                margin: '20rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Avatar sx={{ m: 0, bgcolor: '#000000', height: '4rem', width: '4rem' }}>
                    <img src={logo} style={{ height: '2.6rem', width: '3rem', alignSelf: 'center' }}></img>
                </Avatar>

                <Typography variant="h1" gutterBottom style={{ color: 'black' }}>
                    Product Registrations
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="IDProducto"
                                name="IDProducto"
                                type="number"
                                fullWidth 
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <ColorButton variant="outlined" >
                                <SearchIcon sx={{ fontSize: 40 }}></SearchIcon>
                            </ColorButton>
                        </Grid>
                        


                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                id="filled"
                                label="Descripcion"
                                name="Descripcion"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="filled"
                                label="Image Url"
                                name="QRCode"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="Cost"
                                name="Costo"
                                type="number"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="Stock"
                                name="CantidadRestante"
                                type="number"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="Price"
                                name="Precio"
                                type="number"
                                fullWidth

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="Discount %"
                                name="Descuento"
                                type="number"
                                fullWidth
                            />
                        </Grid>

                        {/* <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="datetime-local"
                                label="Creation Date"
                                name="FechCreacion"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                            />


                        </Grid> */}

                        {/* <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="datetime-local"
                                label="Modificatio Date"
                                type="datetime-local"
                                name="FechaModificacion"
                                defaultValue="2017-05-24T10:30"

                            />
                        </Grid> */}

                        {/* <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                id="filled-number"
                                label="Estatus"
                                name="estatus"
                                type="number"
                            />
                        </Grid> */}
                    </Grid>


                    <Button
                        variant="contained"
                        color="success"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                            marginRight: '1rem',
                            width: '80px',
                            color: 'white',
                            background: 'blue'
                        }}
                    >
                        New
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        // color="success" 
                        style={{
                            marginRight: '1rem',
                            width: '80px',
                            color: 'white',
                            background: 'green'
                        }}
                    >
                        Guardar
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{
                            marginRight: '1rem',
                            width: '80px',
                            color: 'white',
                            background: 'red',

                        }}
                    >
                        Delete
                    </Button>

                </Box>
            </Box>
        </>
    )
}

export default FormProducts


