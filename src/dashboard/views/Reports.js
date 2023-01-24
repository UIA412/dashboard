/*!
        Savings Page
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
  Col
  // UncontrolledTooltip
} from "reactstrap";


function Reports() {

  return (
    <>
      <div className="content">
        <h1>Savings</h1>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Reports for the Building</CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">My Reports</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Monthly Report of User</th>
                      <th>
                        <Button 
                            className="btn btn-primary"
                            type="button"
                            >
                                Download
                        </Button>
                      </th>
                    </tr>
                    <tr>
                      <th>Yearly Report of User</th>
                      <th>
                        <Button 
                            className="btn btn-primary"

                            type="button"
                            >
                                Download
                        </Button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    </>
  );
}

export default Reports;
