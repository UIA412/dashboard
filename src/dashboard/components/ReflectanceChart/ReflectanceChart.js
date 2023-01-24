import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// import swr
import useSWR from 'swr';

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
  Row,
  Col,
  // UncontrolledTooltip
} from "reactstrap";

import Loader from "../Loader/Loader";


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

const url = "/api/reflectancedata";

function ReflectanceChart(props){
    const { data, error } = useSWR(url, fetcher);

    const [bigChartData, setbigChartData] = React.useState("daily");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };

    if (error) return  <Loader error={error} />;
    if (!data) return <Loader 
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
    />;

    const reflectanceDataDaily = data.reflectanceData[0];
    const reflectanceDataMonthly = data.reflectanceData[1];
    const reflectanceDataYearly = data.reflectanceData[2];
    
    let reflectanceChart = {
    daily: (canvas) => {
    
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
        labels: [
            "06:00 AM",
            "09:00 AM",
            "12:00 PM",
            "03:00 PM",
            "06:00 PM",
            "09:00 PM",
            "12:00 AM",
            "03:00 AM"
        ],
        datasets: [
            {
            label: "Current Reflectance",
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
            data: reflectanceDataDaily
            }
        ]
        };
    },
    data2: (canvas) => {
        // Fetch the data from the backend and return it
        
    
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
        labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ],
        datasets: [
            {
            label: "Monthly Average Reflectance",
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
            data: reflectanceDataMonthly
            }
        ]
        };
    },
    data3: (canvas) => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(255,195,0,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
        labels: [
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030"
        ],
        datasets: [
            {
            label: "Yearly Average Reflectance",
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
            data: reflectanceDataYearly
            }
        ]
        };
    },
    options: chart_options
    };

    return (
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Calculations</h5>
                    <CardTitle tag="h2">Rooftop Reflectance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "daily"
                        })}
                        color="primary"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("daily")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Daily
                        </span>
                        <span className="d-block d-sm-none">
                          Daily
                        </span>
                      </Button>
                      <Button
                        color="primary"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2"
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Monthly
                        </span>
                        <span className="d-block d-sm-none">
                          Monthly
                        </span>
                      </Button>
                      <Button
                        color="primary"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3"
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Yearly
                        </span>
                        <span className="d-block d-sm-none">
                          Yearly
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={reflectanceChart[bigChartData]}
                    options= {chart_options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
}

export default ReflectanceChart;