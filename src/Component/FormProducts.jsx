import React, { useState } from 'react'
import { Box, Grid, IconButton, Input, Menu, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar';
import '../Styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'




const FormProducts = ({ IDProducto, Descripcion, CantidadRestante, Costo, Precio, Descuento, QRCode, FechaCreacion, FechaModificacion, Estatus, Imagenes }) => {

    
   const [images, setImages] = useState([]);

    IDProducto
    Descripcion
    CantidadRestante
    Costo
    Precio
    Descuento
    QRCode
    FechaCreacion = new Date().toUTCString()
    FechaModificacion
    Estatus
    Imagenes

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let objData = {
            IDProducto: data.get('IDProducto'),
            Descripcion: data.get('Descripcion'),
            CantidadRestante: data.get('CantidadRestante'),
            Costo: data.get('Costo'),
            Precio: data.get('Precio'),
            Descuento: data.get('Descuento'),
            QRCode: data.get('QRCode'),
            FechaCreacion: data.get('FechCreacion'),
            FechaModificacion: data.get('FechaModificacion'),
            Estatus: data.get('estatus'),
            // Imagenes: data.get('imagenes')
        };

        axios.put('https://quantumswap.herokuapp.com/productos/', objData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => { });
    };

    const handleChange = (e) => {
        setValue(e);
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


        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Avatar sx={{ m: 0, bgcolor: '#000000', height: '4rem', width: '4rem' }}>
                LOGO
            </Avatar>
            <div >
                <h1>Registros Productos</h1>
            </div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="IDProducto"
                            name="IDProducto"
                            type="number"
                            autoComplete="IDProducto"
                            autoFocus
                           
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button variant="contained">

                            <SearchIcon fontSize="inherit"></SearchIcon>


                        </Button>
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled"
                            label="Descripcion"
                            name="Descripcion"
                            autoComplete="Descripcion"
                            autoFocus

                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled"
                            label="Imagen"
                            name="QRCode"
                            autoFocus

                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Costo"
                            name="Costo"
                            type="number"
                            autoComplete="Costo"
                            autoFocus

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Cantidad"
                            name="CantidadRestante"
                            type="number"
                            autoComplete="Cantidad"
                            autoFocus

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Precio"
                            name="Precio"
                            type="number"
                            autoComplete="Precio"
                            autoFocus

                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Descuento %"
                            name="Descuento"
                            type="number"
                            autoComplete="Descuento"
                            autoFocus

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="container-fluid">
                            <label className="btn btn btn-warning">
                                <span>Selecionar Imagen</span>
                                <input hidden type="file" multiple onChange={ChangeInput}></input>
                            </label>

                            {/*View */}

                            <div className='row'>
                                {images.map((imagen) => (
                                    <div className='col-6 col-sm-4 col-lg-3 square' key={imagen.index}>
                                        <div className='content-img'>
                                            <button
                                                className='position-absolute btn btn-danger'
                                                onClick={deleteImg.bind(imagen, imagen.index)}
                                            >X
                                            </button>
                                            <img
                                                alt='algo'
                                                src={imagen.url}
                                                data-togle="modal"
                                                data-target="#ModalPreViewImg"
                                                className="img-responsive"></img>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Image"
                            name="Image"
                            type="number"
                            autoComplete="Image"
                            autoFocus

                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="datetime-local"
                            label="Fecha de Creacion"
                            name= "FechCreacion"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}

                            style={{ marginRight: '1rem' }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="datetime-local"
                            label="Fecha de Modificacion"
                            type="datetime-local"
                            name="FechaModificacion"
                            defaultValue="2017-05-24T10:30"
                            sx={{ width: 250 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Estatus"
                            name="estatus"
                            type="number"
                            autoComplete="Estatus"
                            autoFocus

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="filled-number"
                            label="Imagenes"
                            name="imagenes"
                            type="number"
                            autoComplete="Imagenes"
                            autoFocus

                        />
                    </Grid>

                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Guardar
                </Button>
            </Box>
            {/* <Button variant="contained" color="success">
                Success
            </Button> */}
        </Box>
    )
}

export default FormProducts