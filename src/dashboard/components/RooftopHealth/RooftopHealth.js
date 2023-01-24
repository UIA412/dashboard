import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Doughnut } from "react-chartjs-2";
// import swr
import useSWR from 'swr';

// reactstrap components
import {
//   Button,
//   ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Spinner,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
//   Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "/api/rooftophealth";



function RooftopHealth(props){
  
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (!data) return <div><Spinner color="primary" /></div>

  const healthChart = {
    data: (canvas) => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
  
      return {
        labels: ["Left Good", "Degraded"],
        datasets: [
          {
            label: "Health Report",
            // Coming from the Server
            data: data.health,
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
      }
  };


    return (
        <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Health of Rooftop</h5>
                <CardTitle tag="h3"> 
                  <i className="tim-icons icon-chart-pie-36 text-primary"/> {data.health[0]} {data.unit} Healthy
                </CardTitle>
                <CardTitle tag="h2">
                  <br/>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Doughnut
                    data={healthChart.data}
                    options={healthChart.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
    )

}

export default RooftopHealth;