import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Bar } from "react-chartjs-2";
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


const fetcher = (...args) => fetch(...args).then((res) => res.json());

const url = "/api/savings";



function Savings(props){
    const { data, error } = useSWR(url, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div><Spinner color="primary" /></div>
    console.log(data);

    let savings = {
        data: (canvas) => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
          gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
          gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
      
          return {
            labels: ["06:00AM", "09:00AM", "12:00PM", "03:00PM", "09:00PM", "12:00AM", "03:00AM"],
            datasets: [
              {
                label: "Units Saved",
                fill: true,
                backgroundColor: gradientStroke,
                hoverBackgroundColor: gradientStroke,
                borderColor: "#e6896b",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: data.time
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

    return (
        <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Estd. Savings</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  Amount: {data.currency} {data.savingsAmount}
                </CardTitle>
                <CardTitle tag="h4">
                 Units: {data.savings} {data.unit} 
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={savings.data}
                    options={savings.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
    )
}

export default Savings;