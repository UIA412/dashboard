import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
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
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // Label,
  // FormGroup,
  // Input,
//   Row,
  Col,
  Spinner
  // UncontrolledTooltip
} from "reactstrap";


let chart_options = {
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
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "/api/coolingload";

function CoolingLoad(props){
    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div><Spinner color="primary" /></div>
    console.log(data);

    let coolingLoad = {
        data: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: ["06:00AM", "09:00AM", "12:00PM", "03:00PM", "09:00PM", "12:00AM", "03:00AM"],
            datasets: [
              {
                label: "Wattage",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#ffc300",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#ffc300",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#ffc300",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: data.time
              }
            ]
          };
        },
        options: chart_options
      };
      


    return (
        <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Net Cooling Load</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> {data.coolingLoad} (in {data.unit})
                </CardTitle>
                <CardTitle tag="h2">
                  <br/>
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={coolingLoad.data}
                    options={coolingLoad.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
    )
};


export default CoolingLoad;