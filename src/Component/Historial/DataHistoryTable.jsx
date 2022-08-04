import { useEffect, useState } from 'react'
import UrlApi from '../../globals'
import axios from 'axios'

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "../Dashboard/components/MDBox";
import MDTypography from "../Dashboard/components/MDTypography";
import MDAvatar from "../Dashboard/components/MDAvatar";
import MDProgress from "../Dashboard/components/MDProgress";

// Images
import LogoAsana from "../Dashboard/assets/images/small-logos/logo-asana.svg";
import logoGithub from "../Dashboard/assets/images/small-logos/github.svg";
import logoAtlassian from "../Dashboard/assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "../Dashboard/assets/images/small-logos/logo-slack.svg";
import logoSpotify from "../Dashboard/assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "../Dashboard/assets/images/small-logos/logo-invision.svg";

export default function data({ search }) {

  const Project = ({ image, name }) => (

    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>

  );

  const Progress = ({ color, value }) => (

    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>

  );


  let [shoppingCarts, setShoppingCarts] = useState([])
  const [rows, setRows] = useState([])

  const loadShoppingCarts = (event) => {
    axios.get("https://quantumswap.herokuapp.com/shoppingcarts")
        .then((Response) => {
          shoppingCarts = Response.data
          setShoppingCarts(Response.data)
          let tmpArr = new Array()

          shoppingCarts.map((element) => {
            tmpArr.push({
              ID: (
                <MDTypography component="a"  variant="button" color="text" fontWeight="medium">
                {element.ShoppingCartId}
                </MDTypography>
              ),
              Customer: (
                <MDTypography component="a"  variant="button" color="text" fontWeight="medium">
                {element.UserName}
                </MDTypography>
              ),
              TotalProducts: (
                <MDTypography component="a" variant="button" color="text" fontWeight="medium">
                  {element.TotalProducts}
                </MDTypography>
              ),
              Amount: (
                <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
                  {element.Amount}
                </MDTypography>
              ),
              Date: (
                <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
                  {element.CreationDate}
                </MDTypography>
              ),
              action: (
                <MDTypography component="a"   href="#/Historycust" color="text">
                  <Icon >visibility</Icon>
                </MDTypography>
              )
            })
          })

          setRows(tmpArr)
        })
        .catch((err) => {
            console.log(err)
        })
  }



  useEffect(() => {

    loadShoppingCarts()

    console.log(search + "Aqui en la data")
    
  }, [search])



  return {


    columns: [

      { Header: "ID", accessor: "ID", align: "left" },
      { Header: "Customer", accessor: "Customer", align: "left" },
      { Header: "Products", accessor: "TotalProducts", align: "center" },
      { Header: "Amount", accessor: "Amount", align: "center" },
      { Header: "Date", accessor: "Date", align: "left" },
      { Header: "action", accessor: "action", align: "center" }

    ],

    rows: rows

  };
}
