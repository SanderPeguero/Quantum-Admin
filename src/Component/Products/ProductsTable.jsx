import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material'
import { Box } from '@mui/system'
import { react, useState, useEffect } from 'react'
// import axios from 'axios'
// import UrlApi from '../../../globals'
import axios from 'axios'
import UrlApi from '../../globals'




const Products = ({Pproduct}) => {



    return (
        <>
            <Box
            >
                <h1 style={{ color: 'white' }}>Product</h1>

            </Box>

            <div >
      <div>
        {/* <input
         value={busqueda}
         onChange={handleChange}
          placeholder="Búsqueda por Nombre o Empresa"

        /> */}
      </div>

     <div className="table-responsive">
       <table className="table table-sm table-bordered">
         <thead>
           <tr>
             <th style={{ color: 'white' }}>ProductId</th>
             <th style={{ color: 'white' }}>Description</th>
             <th style={{ color: 'white' }}>Stock</th>
             <th style={{ color: 'white' }}>Cost</th>
             <th style={{ color: 'white' }}>Price</th>
             <th style={{ color: 'white' }}>Discount</th>
           </tr>
         </thead>

         <tbody>
           {
           Pproduct.map((productos)=>(
             <tr key={productos.ProductId}>
               <td style={{ color: 'white' }}>{productos.ProductId}</td>
               <td style={{ color: 'white' }}>{productos.Description}</td>
               <td style={{ color: 'white' }}>{productos.Stock}</td>
               <td style={{ color: 'white' }}>{productos.Cost}</td>
               <td style={{ color: 'white' }}>{productos.Price}</td>
               <td style={{ color: 'white' }}>{productos.Discount}</td>
             </tr>
           ))
           }
         </tbody>

       </table>

     </div>
    </div>
        </>
    )
}

export default Products