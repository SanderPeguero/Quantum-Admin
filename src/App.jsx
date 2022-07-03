import { useState, useEffect } from 'react'
import FormProducts from './Component/FormProducts'
// import axios from 'axios'

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
    const getProducts = () => {
    
        axios.get("https://quantumswap.herokuapp.com/productos/")
        
        .then(response => {
        
          // console.log(response.data.Data);
          // products = response.data.Data
          setProduct(response.data.Data)
        
        }).catch(error=>{
        
          console.log(error);
        
        })
    
    }
    
    useEffect(() =>{
        if(refresh == true){
            getProducts();
            setrefresh(false)
        }
    },[refresh])

    return (
        <FormProducts 
            IDProducto={IDProducto} 
            Descripcion={Descripcion} 
            CantidadRestante={CantidadRestante}
            Costo={Costo}
            Precio={Precio}
            Descuento={Descuento}
            QRCode={QRCode}
            FechaCreacion={FechaCreacion}
            FechaModificacion={FechaModificacion}
            Estatus={Estatus}
            Imagenes={Imagenes}
        />
    )
} 

 export default App