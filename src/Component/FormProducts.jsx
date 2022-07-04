import React, { useState } from 'react'
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'



const FormProducts = ({ IDProducto, Descripcion, CantidadRestante, Costo, Precio, Descuento, QRCode, FechaCreacion, FechaModificacion, Estatus, Imagenes }) => {

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

    const handleChange = (e) => {
        setValue(e);
    };

    return (


        <Box

            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            autoComplete="off"
        >

            <div>
                <h1>Registros Productos</h1>
            </div>

            <Box  sx={{ mt: 1 }}>
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
                    InputProps={{
                        readOnly: true,
                    }}
                />

                {/* Boton Buscar*/}
                <Button>
                    <SearchIcon></SearchIcon>
                </Button>
                <br />

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



                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="filled-number"
                    label="Costo"
                    name="Costo"
                    type="number"
                    autoComplete="Descripcion"
                    autoFocus

                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="filled-number"
                    label="Cantidad"
                    name="Cantidad"
                    type="number"
                    autoComplete="Cantidad"
                    autoFocus

                />

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

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="filled-number"
                    label="Descuento %"
                    name="Descuento %"
                    type="number"
                    autoComplete="Descuento"
                    autoFocus

                />



                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="filled-read-only-input"
                    label="Descripcion"
                    name="Descripcion"
                    defaultValue="Descripcion"
                    variant="filled"
                    autoComplete="Descripcion"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    id="filled-number"
                    label="Cantidad"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
                
                <TextField
                    id="filled-search"
                    label="Costo"
                    type="number"
                    variant="filled"
                />

                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />


                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                />

                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    variant="filled"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
        </Box>

    )
}

export default FormProducts