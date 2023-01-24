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

const data = [
  {
    color: "#DBDBE6",
    name: "Aluminium Zinc",
    sri: 0.55
  },
  {
    color: "#CEC5A8",
    name: "Oyster White",
    value: 0.52
  },
  {
    color: "#000000",
    name: "Black",
    value: 0.1
  },
  {
    color: "#DBDBE6",
    name: "Hawwain Blue",
    sri: 0.31
  },
  {
    color: "#CEC5A8",
    name: "Sahara Tan",
    value: 0.47
  },
  {
    color: "#000000",
    name: "Colony Gren",
    value: 0.35
  },
  {
    color: "#DBDBE6",
    name: "Almond",
    sri: 0.61
  },
  {
    color: "#CEC5A8",
    name: "Copper Metallic",
    value: 0.46
  },
  {
    color: "#000000",
    name: "Colonial Red",
    value: 0.34
  }
];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function Buildings() {

  const [amount, setAmount] = React.useState(56);
  const [money, setMoney] = React.useState(100);
  const [name, setName] = React.useState("Aluminium Zinc");

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <h1>Buildings</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Button href="http://localhost:3000/dataform" color="success" size="lg" >Update Location</Button>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Color
                </CardTitle>
              </CardHeader>
              <CardBody>
                <select className="form-control" onChange={(e) => {
                  changeAmount(e);
                  setMoney(Math.floor(amount*getRandomArbitrary(335, 455)));
                }} >
                   {
                      data.map((item, index) => {
                        return (
                          <option key={index} value={item.value}>
                            {item.name}
                          </option>
                        )
                      })
                   }
                </select>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">
                  Amount Saved
                </CardTitle>
              </CardHeader>
              <CardBody>
                
               <h2 color="primary">Saved Money : $ {Math.floor(money)}</h2>

              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default Buildings;
