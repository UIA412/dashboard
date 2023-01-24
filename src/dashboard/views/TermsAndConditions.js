import {Row, Col, Card, CardHeader, CardBody, CardTitle} from "reactstrap";

function TermsAndConditions(props){

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Terms & Conditions</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    Lorem ipsum dolor sit amet
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>                     
    );
}

export default TermsAndConditions;