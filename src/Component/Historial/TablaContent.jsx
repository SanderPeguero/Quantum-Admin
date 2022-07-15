import { react } from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import DataTable from '../Dashboard/examples/Tables/DataTable'
import authorsTableData from '../Dashboard/layouts/tables/data/authorsTableData'
import MDBox from '../Dashboard/components/MDBox'
import MDTypography from '../Dashboard/components/MDTypography'
import HistorialShopping from './HistoryUserShopping.jsx'



const TablaContent = () => {
    const { columns, rows } = authorsTableData();
    return (
        <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
                <Grid item xs={15}>
                    <Card>
                        <MDBox
                            mx={2}
                            mt={-3}
                            py={3}
                            px={2}
                            variant="gradient"
                            bgColor="info"
                            borderRadius="lg"
                            coloredShadow="info"
                        >
                            <MDTypography variant="h6" color="white">
                                Historial
                            </MDTypography>
                        </MDBox>
                        <MDBox pt={3}>
                            <HistorialShopping></HistorialShopping>
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>

        </MDBox>
    )
}

export default TablaContent