/*!
        Savings Page
*/
import React from "react";
import useSWR from "swr";

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
  Col
  // UncontrolledTooltip
} from "reactstrap";

import {  Bar, Pie } from "react-chartjs-2";

const area = 911;

const healthChart = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

    return {
      labels: ["Saved", ""],
      datasets: [
        {
          label: "Savings",
          // Coming from the Server
          data: [50, 50],
          backgroundColor: [
            "rgb(108, 188, 114, 0.5)",
            "rgb(247, 102, 94, 0.5)"
          ],
          borderColor: [
            "rgb(108, 188, 114)",
            "rgb(247, 102, 94)"
          ],
          borderWidth: 2
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "orange",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    }
};

const chartExample1 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
    gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
    gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors

    // const [amount, setAmount] = React.useState(56);
    // const [area , setArea] = useSearchParams(1150);
    // const Area = area.get("area");
    // const [data, setData] = React.useState(area*amount);

    const changeAmount = (e) => {
      // setAmount(e.target.value);
    };

    const changeArea = (e) =>{
      // setArea(e.target.value);
    };



    return {
      labels: ["November"],
      datasets: [
        {
          label: "Monthly Saving",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: "green",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [453]
        }
      ]
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(225,78,202,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }
      ]
    }
  }
};


function Savings() {
  
  const [currency, setCurrency] = React.useState("$ 1132");
  // const [amountInr, setamountInr] = React.useState(data*83);
  // const [currencySelected, setCurrencySelected] = React.useState("USD");

  // const changeCurrency = (e) => {
  //   setCurrencySelected(e.target.value);
  //   if (e.target.value === "USD") {
  //     setCurreny("$");
  //     setamountInr(data*83);
  //   } else {
  //     setCurreny("₹");
  //     setamountInr(data);
  //   }
  // };
  const v1 = generateRandomArbitary(1.5, 6);
  const v2 = generateRandomArbitary(0.5, 3);
  function generateRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <div className="content">
        <h1>Savings</h1>
        <Row>
        <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Savings Amount</CardTitle>
              </CardHeader>
              <CardBody>
                <h1>Amount you will save - 
                  {/* {currency} {amountInr} */}
                </h1>
                <h2 className="text-success"></h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Savings Chart</CardTitle>
              </CardHeader>
              <CardBody>
                {/* 
                    Savings Bar Chart
                */}
                <div className="chart-area">
                  <Bar
                    data={chartExample1.data}
                    options={chartExample1.options}
                  />

                  </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Savings Table</CardTitle>
                <select className="form-control" onChange={(e) =>{
                  setCurrency(e.target.value);
                }} >
                  <option value="USD">$ USD</option>
                  <option value="INR">₹ INR</option>
                </select>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Month</th>
                      <th>Year</th>
                      <th className="text-center">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>November</td>
                      <td>2022</td>
                      <td className="text-center">{ 
                        currency === "USD" ? "USD" : "INR"
                      }</td>
                    </tr>

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
                <Pie
                  data={healthChart.data}
                  options={healthChart.options}
                ></Pie>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h4">Data</CardTitle>
              </CardHeader>
              <CardBody>
                <h4>Electrical Units Comsumed By Normal Roof: <h3>{Math.floor(v1)} Units</h3> </h4> 
                <h4>Electrical Units consumed by the preffered roof:<h3> {Math.floor(v2)} Units</h3> </h4>
                <h4>Estimated Bill from Normal Roof: Rs. <h3> {Math.floor(v1 * (area/240))}</h3>  </h4>
                <h4>Estimated Bill from Normal Roof: Rs. <h3> {Math.floor(v2 * (area/240))}</h3>  </h4>
                <h4>Net Savings : <h3> {Math.floor(v1 * (area/240) - v2 * (area/240))}</h3> </h4>
                <h4>Percentage: <h3> {Math.floor(v1 * (area/240) / (v1 * (area/240) - v2 * (area/240))*100)}</h3> </h4>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12" background="success">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">You can now save more!!</CardTitle>
              </CardHeader>
              <CardBody>
                  Subscribe to our application in just a small fee, and be happy with worry free estimation costs and our future
                  maintainence.
                  <Button href="https://rzp.io/l/AayLcx2uf" color="success" size="lg" target="_blank">Subscribe Now!</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    </>
  )
}

export default Savings;
