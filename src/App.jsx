import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import './Styles.css'
import UrlApi from './globals.jsx'
// import axios from 'axios'
import HistoryCustomer from './Component/Historial/HistoryCustomer.jsx'

const producto = {

    "IDProducto": 1,
    "Descripcion": " ",
    "CantidadRestante": 0,
    "Costo": 0,
    "Precio": 0,
    "Descuento": 0,
    "QRCode": " ",
    "FechaCreacion": "2022-06-11T09:23:45.000Z",
    "FechaModificacion": "2022-06-11T09:23:45.000Z",
    "Estatus": null,
    "Imagenes": {}

} //JSON

let IDProducto = 0
let Descripcion = ""
let CantidadRestante = 0
let Costo = 0
let Precio = 0
let Descuento = 0
let QRCode = ""
let FechaCreacion = new Date().toUTCString()
let FechaModificacion = new Date().toUTCString()
let Estatus = null
let Imagenes = {}

const App = () => {

    const [refresh, setrefresh] = useState(false);
    const [openInfoCliente, setOpenInfoCliente] = useState(false)

    const getProducts = () => {

        axios.get(UrlApi + "/products/")

            .then(response => {

                setProduct(response.data.Data)

            }).catch(error => {

                console.log(error);

            })

    }

    useEffect(() => {
        if (refresh == true) {
            getProducts();
            setrefresh(false)
        }
    }, [refresh])

    return (
        <>
            <Router>
                <Routes>
                    <Route path='*' element={<Dashboard />}></Route>
                    <Route exact path='/Historycust' element={<HistoryCustomer />}></Route>
                </Routes>
            </Router>
        </>
    )
}
export default App