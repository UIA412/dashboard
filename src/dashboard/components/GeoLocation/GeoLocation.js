import { useGeolocated } from 'react-geolocated';
import {Row, Col, Card, CardHeader, CardBody, CardTitle, Table, Spinner} from "reactstrap";
import useSWR from 'swr';
import Loader from "dashboard/components/Loader/Loader.js";

const GeoLocation = (props) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
        positionOptions: {
        enableHighAccuracy: true,
        },
        userDecisionTimeout: 10000,
    });
    const fetcher = (...args) => fetch(...args).then(response => response.json());
    const { data, error } = useSWR(`/locationdata`, fetcher);
    // if (error) return <Loader/>
    // if (!data) return <Loader />
    // const { data: address, error: addressError } = useSWR(`/getAddress?latitude=${coords?.latitude}&longitude=${coords?.longitude}`, fetcher);
    // console.log(data);
    // console.log(address);
    // if (error) return <Loader/>
    // if (!data || !address) return <Loader />

    // console.log(data);
    // function getNearestTime(){
    //     let time = new Date();
    //     let hour = time.getHours();
    //     let nearestHour = Math.round(hour/3)*3;
    //     return nearestHour;
    // }
    // let nearestHour = getNearestTime();
    // let nearestHourData = data.find((hour) => hour.datetime.includes(nearestHour));
    // console.log(nearestHourData);
    // let tempInCelsius = Math.round(Math.round((nearestHourData.temp - 32) * 5/9) - 3);


    return  !isGeolocationAvailable ? (

        <div>Your browser does not support Geolocation</div>

    ) : !isGeolocationEnabled ? (
      // Enable Geolocation in your browser by asking through pop-up
        <div>Geolocation is not enabled</div>
    ) : coords ? (

        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Location Entered</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" >
                  <thead className="text-primary">
                    <tr>
                      <th>Region: </th>
                      <td colSpan={3}><h4 className='text-primary'> {data.name} </h4></td>
                    </tr>
                    <tr>
                        <th>Temperature:</th>
                        <td>
                          <h1 className='text-warning'>68.4 ℉ <span className='text-success'>/</span>19.05 ℃ </h1>
                        </td>
                        <th>Solar Radiation</th>
                        <td><h1 className='text-primary'>603 W/m<sup>2</sup></h1></td>
                    </tr>
                  </thead>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
};

export default GeoLocation;