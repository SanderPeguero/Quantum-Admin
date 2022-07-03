import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'



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
            noValidate
            autoComplete="off"
        >
            <div>
                <h1>Registros Productos</h1>
            </div>
            <div>
                <h1>{FechaModificacion}</h1>
            </div>

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>

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
             
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="filled-read-only-input"
                    label="Descripcion"
                    name = "Descripcion"
                    defaultValue="Descripcion"
                    variant="filled"
                />
                <TextField
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
                    label="Search field"
                    type="search"
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