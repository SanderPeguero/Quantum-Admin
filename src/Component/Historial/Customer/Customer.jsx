import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material'
import { Box } from '@mui/system'
import { react, useState, useEffect } from 'react'
import team2 from '../../Dashboard/assets/images/team-2.jpg'
import axios from 'axios'
import UrlApi from '../../../globals'


const customer = ({ customer }) => {


    let [User, setUser] = useState([]);
    const [table, settable] = useState([])
    const [search, setSearch] = useState("")
    
    let tmpArr = new Array()

    const handlesearch = () => {
        axios.get("https://quantumswap.herokuapp.com/shoppingcarts")
            .then(Response => {
                User = Response.data
                setUser(Response.data)
                settable(Response.data)

            }).catch(err => {

                console.log(err)
            })
    }

    const handleChange=e=>{
        setSearch(e.target.value)
        filtrar(e.target.value)

    }

    const filtrar = (terminos)=>{
        var resultadp = table.filter((element)=>{
            if(element.UserName.toString().toLowerCase().includes(terminos.toLowerCase())
            || element.UserName.toString().toLowerCase().includes(terminos.toLowerCase()))
            {
                return resultadp
            }
        })
        setUser(resultadp)
        console.log(resultadp);
    }



    useEffect(() => {
        handlesearch()
        console.log(User)

    }, [])




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
                    {/* {VamosAver.map((name) => (<div key={name.UserId} style={{color: 'white'}}>{name.UserId}</div>))} */}
                    {/* {VamosAver.push((handlesearch))} */}


                </h3>
                <input
                    value={search}
                    onChange={handleChange}
                    placeholder="Search"
                />
                <TableContainer >
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ color: 'white' }}>ShoppingCartId</TableCell>
                                <TableCell style={{ color: 'white' }}>UserName</TableCell>
                                {/* <TableCell style={{color: 'white'}}>Product</TableCell> */}
                                <TableCell style={{ color: 'white' }}>Amount</TableCell>
                                <TableCell style={{ color: 'white' }}>CreationDate</TableCell>
                                {/* <TableCell style={{ color: 'white' }}>ModificationDate</TableCell> */}
                                {/* <TableCell style={{ color: 'white' }}>Status</TableCell> */}
                                {/* <TableCell style={{ color: 'white' }}>ShoppingCartProducts</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {User && User.map((historia) => (
                                <TableRow key={historia.ShoppingCartId}>
                                    <TableCell style={{ color: 'white' }}>{historia.ShoppingCartId}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{historia.UserName}</TableCell>
                                    {/* <TableCell style={{ color: 'white' }}>{historia.ShoppingCartProducts}</TableCell> */}
                                    <TableCell style={{ color: 'white' }}>{historia.Amount}</TableCell>
                                    <TableCell style={{ color: 'white' }}>{historia.CreationDate}</TableCell>
                                    {/* <TableCell style={{ color: 'white' }}>{historia.ModificationDate}</TableCell> */}
                                    {/* <TableCell style={{ color: 'white' }}>{historia.Status}</TableCell> */}
                                    {/* <TableCell style={{ color: 'white' }}>{historia.ShoppingCartProducts}</TableCell> */}
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