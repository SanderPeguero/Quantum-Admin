import * as React from 'react';
import Box from '@mui/material/Box';

// import { DataGridPro } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';

import DataTable from '../Dashboard/examples/Tables/DataTable' 

// Data
import DataHistoryTable from "./DataHistoryTable";


const HistoryShopping = () => {

  const { columns: pColumns, rows: pRows } = DataHistoryTable(); 

  //Mira, la idea mia es la siguiente
  //1-Se hace la llamada a los datos con el axios en el DataHistoryTable
  //2-Luego se mapean loss datos y se asignan al JSON
  //3-Aqui se queda igual y muestra los datos
  //El unico bobo es que cuando se quiera actualizar hay que recargar un componente externo a la vista
  //Aunque bueno simplemente se vuelve a invocar la funcion DataHistoryTable() y ya.......Es mi teoria
  

  //Con un useEffect no seria mejor para recargar, Aunque ahorita intente algo asi y se convirtio en infinito
  //Tambien recuerda que el Shopping History es para el usario admin busque los reportes de Historial de compra de su clientes
  //No todo debe aparecer, si no el que especifica el User admin
  //Ademas de eso, creo que tambien en la tienda hay que hacer los mismo segun la foto que te voy a enviar por el grupo
  
  // 💀

  return (

    <Box sx={{ height: 520, width: 800 }}>
      <DataTable
        table={{ columns: pColumns, rows: pRows }}
        isSorted={false}
        entriesPerPage={false}
        showTotalEntries={false}
        noEndBorder
        
        style={{color: 'white'}}
      />

    </Box>

  )
}

export default HistoryShopping

{/*
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGridProDemo() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPro
        {...data}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
*/}
