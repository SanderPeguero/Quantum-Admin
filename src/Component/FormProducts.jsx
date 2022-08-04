import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Input, Menu, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import DashboardNavbar from "./Dashboard/examples/Navbars/DashboardNavbar";
import '../Styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import UrlApi from '../globals'
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal';
import Products from './Products/ProductsTable'
import { async } from 'regenerator-runtime';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



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
            CategoryId: data.get('CategoryId'),
            Stock: data.get('CantidadRestante'),
            Cost: data.get('Costo'),
            Price: data.get('Precio'),
            Discount: data.get('Descuento'),
            Image: data.get('QRCode')
        };

        axios.put("https://quantumswap.herokuapp.com/products", objData)
            .then((response) => {
                console.log(response.data)
                document.getElementById('formproduct').reset()
            })
            .catch((err) => { });
    };

    let [Pproduct, setPproduct] = useState([])

    const PeticionesGet = async() =>{
        await axios.get("https://quantumswap.herokuapp.com/products")
            .then((Response)=>{
                Pproduct = Response.data
                setPproduct(Response.data)
            })
    }

    useEffect(()=>{
        PeticionesGet()
    },[])


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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








    const [Id, setId] = useState();













    function deleteImg(indice) {
        const newImgs = images.filter(function (element) {
            return element.index !== indice;
        });

        console.log(newImgs);
        setImages(newImgs);
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <>

            <DashboardNavbar />
            <Box sx={{
                margin: '20rem',
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mx: 'auto',
                width: 800,
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
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '800',
                alignContent: 'center',
                backgroundColor: 'black'
            }}>

                <Typography variant="h1" gutterBottom style={{ color: 'white' }}>
                    Product Registrations
                </Typography>
                <br />

                <Box component="form" id="formproduct" noValidate onSubmit={handleSubmit} >

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="IDProducto"
                                name="IDProducto"
                                value={Id}
                                type="number"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} sm={1}>
                            <ColorButton variant="outlined" onClick={handleOpen}>
                                <SearchIcon sx={{ fontSize: 50 }}></SearchIcon>
                            </ColorButton>

                            <div>
                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box
                                        sx={{
                                            width: 850,
                                            background: 'black',
                                            alignItems: 'center',
                                            margin: '20rem',
                                            marginTop: '1rem',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            mx: 'auto',
                                            // p: 1,
                                            // m: 4,
                                            
                                        }}
                                    >
                                        <Products Pproduct={Pproduct}></Products>
                                    </Box>
                                </Modal>
                            </div>

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
                        
                        <Grid item xs={12} >
                            <TextField
                                required
                                fullWidth
                                id="filled"
                                label="Category"
                                name="CategoryId"

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
                                InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}

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
                                InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="Discount"
                                name="Descuento"
                                type="number"
                                fullWidth
                                InputProps={{ endAdornment: <InputAdornment position='end'>%</InputAdornment> }}
                            />
                        </Grid>

                    </Grid>

                    <Box

                    >
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
            </Box>
        </>
    )
}

export default FormProducts


