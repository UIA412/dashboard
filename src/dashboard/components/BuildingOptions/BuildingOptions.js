import React from "react";

import useSWR from "swr";

import Loader from "../Loader/Loader";

// reactstrap components
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const url = "/api/buildings";


function BuildingOptions(props) {
    const {data, error} = useSWR(url, fetcher);
    if (error) return <div className="text-danger">failed to load due to {console.log(error)} </div>;

    if (!data) return <Loader />;


    return (
        <Row>
          <Col lg="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="12">
                    <h5 className="card-category">Select Buildings</h5>
                    <CardTitle tag="h2">
                      <select className="form-control">
                        {data.buildings.map((building) => (
                            <option key={building.id} value={building.id}>
                                {building.name}
                            </option>
                        ))}
                      </select>
                    </CardTitle>
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>
    )
}

export default BuildingOptions;