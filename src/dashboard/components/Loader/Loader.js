// import gif from 'assets/images/loader.gif';

import {Row, Col, Spinner} from "reactstrap";

const gif = 'https://raw.githubusercontent.com/UIA412/app/main/loader.gif';

const Loader = (props) => (
    <Row type="flex" justify="center" align="middle" style={{height: '100%'}}>
        <Col>
          {/* Image */}
            <img src={gif} alt="loader" style={{width: '250px', height: '200px'}}/>
        </Col>
    </Row>
);

export default Loader;