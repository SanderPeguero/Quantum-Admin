import * as React from 'react'
import { useEffect, useState } from 'react'
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
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
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

    const [offersTypes, setOffersTypes] = React.useState([])
    let [offerType, setOfferType] = React.useState('')
    const [sections, setSections] = React.useState([])
    let [section, setSection] = React.useState('')
    const [categories, setCategories] = React.useState([])
    let [category, setCategory] = React.useState('')
    const [products, setProducts] = React.useState([])
    let [itemProduct, setItemProduct] = React.useState('')
    const [StartDate, setStartDate] = React.useState(new Date())
    const [EndingDate, setEndingDate] = React.useState(new Date())


    const handleChangeOfferType = (event) => {
        offerType = event.target.value
        setOfferType(event.target.value)
        cargarSections()
    }

    const handleChangeSection = (event) => {
        section = event.target.value
        setSection(event.target.value)
        cargarCategories(section)
    }

    const handleChangeCategory = (event) => {
        category = event.target.value
        setCategory(event.target.value)
        cargarProducts()
    }

    const handleChangeItemProduct = (event) => {
        setItemProduct(event.target.value)
    }

    const handleChangeFromDate = (event) => {
        setStartDate(event.target.value)
    }

    const handleChangeUntilDate = (event) => {
        setEndingDate(event.target.value)
    }

    const cargarOffersTypes = (event) => {
        axios.get(UrlApi + "/offertypes")
            .then((Response) => {
                console.log(Response.data)
                setOffersTypes(Response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const cargarSections = (event) => {
        axios.get(UrlApi + "/sections")
            .then((Response) => {
                console.log(Response.data)
                setSections(Response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const cargarCategories = (event) => {
        axios.get(UrlApi + "/categories/listbysection/" + section)
            .then((Response) => {
                console.log(Response.data)
                setCategories(Response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const cargarProducts = (event) => {
        axios.get(UrlApi + "/products/listbycategory/" + category)
            .then((Response) => {
                console.log(Response.data)
                setProducts(Response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handlesubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let objData = {
            OfferId: data.get('OfferId'),
            OfferTypeId: data.get('OfferTypeId'),
            Description: data.get('Description'),
            Discount: data.get('Discount'),
            StartDate: StartDate.toISOString().slice(0, 19).replace('T', ' '),
            EndingDate: EndingDate.toISOString().slice(0, 19).replace('T', ' ')
        };

        if (objData.OfferTypeId == 4) {
            objData.EntityId = data.get('SectionId')
        } else if (objData.OfferTypeId == 14) {
            objData.EntityId = data.get('CategoryId')
        } else if (objData.OfferTypeId == 24) {
            objData.EntityId = data.get('ProductId')
        }
        axios.put(UrlApi + "/offers", objData)
            .then((Response) => {
                if (Response.data.Executed) {
                    document.getElementById('formOffers').reset()
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        cargarOffersTypes()
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

                <Box id="formOffers" component="form" noValidate onSubmit={handlesubmit}>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="OfferId"
                                label="OfferId"
                                name="OfferId"
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

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="Description"
                                label="Description"
                                name="Description"
                                autoComplete='off'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="Discount"
                                label="Discount"
                                name="Discount"
                                type="number"
                                fullWidth
                                InputProps={{ endAdornment: <InputAdornment  position='end'>%</InputAdornment> }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box >
                                <FormControl fullWidth>
                                    <InputLabel required>Offer Type</InputLabel>
                                    <Select
                                        required
                                        value={offerType}
                                        label="OfferType"
                                        name ="OfferTypeId"
                                        id="OfferTypeId"
                                        onChange={handleChangeOfferType}
                                    >
                                        {offersTypes.map((element) => (<MenuItem key={element.OfferTypeId} value={element.OfferTypeId}>{element.Description}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box >
                                <FormControl fullWidth>
                                    <InputLabel >Section</InputLabel>
                                    <Select
                                        value={section}
                                        label="Section"
                                        name="SectionId"
                                        id="SectionId"
                                        onChange={handleChangeSection}
                                       
                                    >
                                        {sections.map((element) => (<MenuItem key={element.SectionId} value={element.SectionId}>{element.Description}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                            
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box sx={{ minWidth: 120 }} style={{padding: '0'}}>
                                <FormControl fullWidth>
                                    <InputLabel >Category</InputLabel>
                                    <Select
                                        value={category}
                                        label="Category"
                                        name ="CategoryId"
                                        id='CategoryId'
                                        onChange={handleChangeCategory}
                                    
                                    >
                                        {categories.map((element) => (<MenuItem key={element.CategoryId} value={element.CategoryId}>{element.Description}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box sx={{ minWidth: 120 }} style={{padding: '0'}}>
                                <FormControl fullWidth>
                                    <InputLabel >Product</InputLabel>
                                    <Select
                                        value={itemProduct}
                                        label="Product"
                                        name="ProductId"
                                        id="ProductId"
                                        onChange={handleChangeItemProduct}
                                    
                                    >
                                        {products.map((element) => (<MenuItem key={element.ProductId} value={element.ProductId}>{element.Description}</MenuItem>))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="From"
                                    value={StartDate}
                                    id="StartDate"
                                    name="StartDate"
                                    onChange={handleChangeFromDate}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="Until"
                                    value={EndingDate}
                                    id="EndingDate"
                                    name="EndingDate"
                                    onChange={handleChangeUntilDate}
                                />
                            </LocalizationProvider>
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
                            type='submit'
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


