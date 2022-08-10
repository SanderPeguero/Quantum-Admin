/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDAvatar from "../../../components/MDAvatar";
import MDBadge from "../../../components/MDBadge";

// Images
import team2 from "../../../assets/images/team-2.jpg";
import team3 from "../../../assets/images/team-3.jpg";
import team4 from "../../../assets/images/team-4.jpg";

//Icon
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Team Quantum", accessor: "author", width: "45%", align: "left" },
      { Header: "Function", accessor: "function", align: "left" },
      { Header: "Employed", accessor: "employed", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      // { Header: "Show", accessor: "action", align: "center" },
    ],

    rows: [
      //--------------------------------------------------------------------
      {
        author: <Author image={team2} name="Sander Peguero" email="sander@quantum.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },

      {
        author: <Author image={team4} name="Jose Alberto" email="josealberto@quantum.com" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },

      {
        author: <Author image={team3} name="Albert Mendoza" email="Albert@quantum.com" />,
        function: <Job title="Administrator." description="Data base" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //    <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },

      {
        author: <Author image={team4} name="Jose Alberto" email="josealberto@quantum.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },

      {
        author: <Author image={team3} name="Reni Antonio" email="Reni@quantum.com" />,
        function: <Job title="Digitizer." description="Description Project" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //    <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },
      //--------------------------------------------------------------------

      {
        author: <Author image={team2} name="Sander Peguero" email="sander@quantum.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },
      {
        author: <Author image={team3} name="Albert Mendoza" email="Albert@quantum.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //    <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },
     
     
      {
        author: <Author image={team3} name="Reni Antonio" email="Reni@quantum.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },

     
      {
        author: <Author image={team4} name="Jose Alberto" email="josealberto@quantum.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           Boss
          </MDTypography>
        ),
        // action: (
        //   <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium" sx={{ fontSize: 20 }}>
        //     <VisibilityIcon></VisibilityIcon>
        //   </MDTypography>
        // ),
      },
    ],
  };
}
