import React from "react";
import useSWR from "swr";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const url = "/api/rooftopReportTable";
const fetcher = (url) => fetch(url).then((res) => res.json());


function HealthReportTable(props) {
  const { data, error } = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

    return (
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Health Report of Rooftop</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter">
                  <thead className="text-primary">
                    <tr>
                      <th>S.No </th>
                      <th>Building</th>
                      <th>Reflectance %age</th>
                      <th>Cooling Load (in Watts)</th>
                      <th>Temperature (in ℃)</th>
                      <th>SRI</th>
                      <th>Area (In sq. m)</th>
                      <th>Savings (in KWh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td style={
                          item.avgReflectance < 0.5 ? {color: "red"} : {color: "green"}
                        } >{item.avgReflectance*100}</td>
                        <td>{item.avgCoolingLoad}</td>
                        <td>{item.atTemp}</td>
                        <td>{item.SRI}</td>
                        <td>{item.area}</td>
                        <td>{item.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    )

}

export default HealthReportTable;