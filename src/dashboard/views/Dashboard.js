/*!
        Dashbaord Main View Page
*/
import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
  Table,
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

// Buildings
import BuildingOptions from "dashboard/components/BuildingOptions/BuildingOptions.js";

import ReflectanceChart from "dashboard/components/ReflectanceChart/ReflectanceChart.js";
import CoolingLoad from "dashboard/components/CoolingLoad/CoolingLoad.js";
import Savings from "dashboard/components/Savings/Savings.js";
import RooftopHealth from "dashboard/components/RooftopHealth/RooftopHealth.js";

import HealthReportTable from "dashboard/components/HealthReportTable/HealthReportTable.js";

import GeoLocation from "dashboard/components/GeoLocation/GeoLocation";


function Dashboard(props) {

  return (
    <>
      <div className="content">
        <GeoLocation />
        <BuildingOptions />
        <ReflectanceChart />
        <Row>
          <CoolingLoad />
          <Savings />
          <RooftopHealth />
        </Row>
        <HealthReportTable />
      </div>
    </>
  );
}

export default Dashboard;
