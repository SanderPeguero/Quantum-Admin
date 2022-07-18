import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Input, Menu, MenuItem, Select } from '@mui/material'
import TextField from '@mui/material/TextField'
import DashboardNavbar from "./Dashboard/examples/Navbars/DashboardNavbar";
// import '../Styles.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from '@mui/material'
import axios from 'axios'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import UrlApi from '../globals'
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import input from './Dashboard/assets/theme/components/form/input';






const FormOfertas = ({ ProductId, Description, Stock, Cost, Price, Discount, Image, CreationDate, ModificatioDate, Status, Imagenes, product }) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[800]),
        backgroundColor: indigo[800],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    }));

    const [Id, setId] = useState(0);

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);



    const [age, setAge] = useState('');
    const [section, setsection] = useState([])
    const [category, setcategory] = useState([])
    const [show, setShow] = useState('')

    const handleselectsection = (event) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);

        axios.get("https://quantumswap.herokuapp.com/sections")
            .then((Response) => {
                console.log(Response.data)
                setsection(Response.data)
            })
    }

    const handleselectcategory = (event) => {
        axios.get("https://quantumswap.herokuapp.com/categories")
            .then((Response) => {
                console.log(Response.data)
                setcategory(Response.data)

            })
    }

    // useEffect(() => {
    //     handleselect();

    // },[])

    const handleChangeOffersType = (event) => {
      setShow(event.target.value);
    };

    useEffect(() => {
        handleselectsection()
        handleselectcategory()
    },[])

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

                <Typography variant="h1" gutterBottom >
                    Offers
                </Typography>
                <br />

                <Box component="form" noValidate>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="filled-number"
                                label="OffersId"
                                name="OffersId"
                                value={Id}
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
                                label="Description"
                                name="Description"

                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box >
                                <FormControl fullWidth>
                                    <InputLabel >Section</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={show}
                                        label="Category"
                                        name ="show"
                                        onChange={handleChangeOffersType}
                                       
                                    >

                                        {section.map((seccion) => (<MenuItem key={seccion.SectionId} onSelect={()=> setsection(seccion.Description)}>{seccion.Description}</MenuItem>))}
                                        {/* <MenuItem value={10} onSelect={()=> setAge("10")}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </Box>
                            
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box sx={{ minWidth: 120 }} style={{padding: '0'}}>
                                <FormControl fullWidth>
                                    <InputLabel >Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        name ="show"
                                        onChange={handleChangeOffersType}
                                    
                                    >
                                        {category.map((categoria) => (<MenuItem key={categoria.CategoryId} onSelect={()=> setsection(categoria.Description)}>{categoria.Description}</MenuItem>))}
                                        {/* <MenuItem value={10} onSelect={()=> setAge("10")}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem> */}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                        <TextField
                        required
                                id="filled-number"
                                label="Descuento"
                                // name="CantidadRestante"
                                type="number"
                                fullWidth
                                InputProps={{ endAdornment: <InputAdornment  position='end'>%</InputAdornment> }}
                            />
                        </Grid>
{/* 
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
                        </Grid>*/}

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
                            // type="submit"
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
{/* 
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box> */}
            </Box>
        </>
    )
}

export default FormOfertas


