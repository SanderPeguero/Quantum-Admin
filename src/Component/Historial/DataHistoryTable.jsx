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

export default function data() {

const datacliente = [
  {Nombre: 'Jose Alberto', Emaail: 'josegonzalez@gmail.com', Realizado: 7, Devueltoss: 4}
]




  
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



  return {

    
    columns: [

      { Header: "Nombre", accessor: "project", width: "30%", align: "left" },
      { Header: "Email", accessor: "budget", align: "left" },
      { Header: "Pedidos Realizados", accessor: "realizados", align: "center" },
      { Header: "Pedidos Devueltos", accessor: "devueltos", align: "center" },
      { Header: "action", accessor: "action", align: "center" }

    ],

  

    rows: [
      {
        project: (
          <MDTypography component="a"  variant="button" color="text" fontWeight="medium">
          Jose Alberto
        </MDTypography>
        ),
        budget: (
          <MDTypography component="a" variant="button" color="text" fontWeight="medium">
            josealberto@gmail.com
          </MDTypography>
        ),
        realizados: (
          <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
            7
          </MDTypography>
        ),
        devueltos: (
          <MDTypography component="a"  variant="caption" color="text" fontWeight="medium">
            7
          </MDTypography>
        ),
        action: (
          <MDTypography component="a"   href="#/Historycust" color="text">
            <Icon >visibility</Icon>
          </MDTypography>
        )
      }
    ]

  };
}
