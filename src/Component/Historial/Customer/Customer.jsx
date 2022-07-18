import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material'
import { Box } from '@mui/system'
import { react, useState, useEffect } from 'react'
import team2 from '../../Dashboard/assets/images/team-2.jpg'
import axios from 'axios'


const customer = ({ customer }) => {

    const posts = [
        { Producto: 'Lentes', Amount: 250, Fecha: '25/6/2022', status: 'Recibido' },
        { Producto: 'GameBoy Colorr', Amount: 500, Fecha: '25/6/2022', status: 'Recibido' },
        { Producto: 'Headset', Amount: 500, Fecha: '25/6/2022', status: 'Devuelto' },
        { Producto: 'DJI Inspire 1', Amount: 500, Fecha: '25/6/2022', status: 'Recibido' },
        { Producto: 'Mac Book', Amount: 500, Fecha: '25/6/2022', status: 'Recibido' }
    ];

    const [User, setUser] = useState([]);
    const [refresh, setrefresh] = useState(false)

    const numero = 3


    const handlesearch = () => {
        axios.get("https://quantumswap.herokuapp.com/users/numero")
            .then(response => {

                setUser(response.data)
                setrefresh(true)

                // setrefresh(true)

            }).catch(err => {
              
                console.log(err)
            })
    }

    const VamosAver = [User]

    // useEffect(() =>{
    //     console.log(VamosAver)
    //     setrefresh(false)
    //     handlesearch()
    // },[refresh])




    return (
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
                    backgroundColor: 'black',
                    
                }}
            >
                <h1 style={{ color: 'white' }}>Historial de Compra de Cliente</h1>
                <Button onClick={handlesearch}>Mostrar</Button>
            </Box>
            <Box
                sx={{
                    margin: '20rem',
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    mx: 'auto',
                    width: 800,
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
                }}
            >
                <h3 style={{ color: 'white' }}>
                    <Avatar src={team2}>

                    </Avatar>
                   {VamosAver.map((name) => (<div key={name.UserId} style={{color: 'white'}}>{name.Name}</div>))}
                    
                </h3>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ color: 'white' }}>Productos</TableCell>
                                <TableCell style={{ color: 'white' }}>Amount</TableCell>
                                <TableCell style={{ color: 'white' }}>Fecha</TableCell>
                                <TableCell style={{ color: 'white' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {posts.map((historia) => (
                                <TableRow key={historia.Producto}>
                                    <TableCell style={{ color: 'white' }}>{historia.Producto}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{historia.Amount}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{historia.Fecha}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{historia.status}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </>
    )
}

export default customer