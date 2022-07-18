import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow , Button} from '@mui/material';
import { Box } from '@mui/system';
import {react} from 'react'

const Dataprueba = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put("https://quantumswap.herokuapp.com/shoppingcarts")
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => { });
    };
    const posts = [
        {Producto: 'Lentes', Amount: 250, Fecha: '25/6/2022', status: 'Recibido'},
        {Producto: 'GameBoy Colorr', Amount: 500, Fecha: '25/6/2022', status: 'Recibido'},
        {Producto: 'Headset', Amount: 500, Fecha: '25/6/2022', status: 'Devuelto'},
        {Producto: 'DJI Inspire 1', Amount: 500, Fecha: '25/6/2022', status: 'Recibido'},
        {Producto: 'Mac Book', Amount: 500, Fecha: '25/6/2022', status: 'Recibido'}
      ];

    return(
        <>
        <Box
           sx={{
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
            border: '1px solid',
            borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
            borderRadius: 2,
            textAlign: 'left',
            fontSize: '0.875rem',
            fontWeight: '900',
            alignContent: 'center',
            backgroundColor: 'black'
        }}>
            <TableContainer>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white'}}>Nombre</TableCell>
                            <TableCell style={{color: 'white'}}>Email</TableCell>
                            <TableCell style={{color: 'white'}}>Pedidos Realizado</TableCell>
                            <TableCell style={{color: 'white'}}>Pedidos Devuelto</TableCell>
                            <TableCell style={{color: 'white'}}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {posts.map((historia) => (
                                 <TableRow key={historia.Producto} style={{position: "absolute"}}>
                                <TableCell style={{color: 'white'}}>{historia.Producto}</TableCell>
                                <TableCell style={{color: 'white'}}>{historia.Amount}</TableCell>
                                <TableCell style={{color: 'white'}}>{historia.Fecha}</TableCell>
                                <TableCell style={{color: 'white'}}>{historia.status}</TableCell>
                                <TableCell style={{color: 'white'}} component="a" href="#/Historycust">Ver</TableCell>
                            </TableRow>
                            ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </Box>
        </>
    )
}

export default Dataprueba