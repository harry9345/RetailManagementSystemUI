/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// react plugin used to create charts dasds
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import CardsHeader from "components/Headers/CardsHeader";

import {
  barChartExample,
  lineChartExample,
  dotChartExample,
  doughnutChartExample,
  pieChartExample,
  multiBarChartExample,
} from "variables/charts";

const ChartsPage = () => {
  return (
    <>
      <CardsHeader name="Charts" parentName="Charts" />
      <Container className="mt--6" fluid>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Overview</h6>
                <h5 className="h3 mb-0">Total sales</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    id="chart-sales"
                    className="chart-canvas"
                    data={lineChartExample}
                    options={{
                      plugins: {
                        tooltip: {
                          intersect: false,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Performance</h6>
                <h5 className="h3 mb-0">Total orders</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={barChartExample}
                    className="chart-canvas"
                    id="chart-bars"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Growth</h6>
                <h5 className="h3 mb-0">Sales value</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={dotChartExample}
                    id="chart-points"
                    className="chart-canvas"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Users</h6>
                <h5 className="h3 mb-0">Audience overview</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Doughnut
                    data={doughnutChartExample}
                    options={{
                      animation: {
                        animateScale: true,
                      },
                      cutout: 120,
                    }}
                    className="chart-canvas"
                    id="chart-doughnut"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Partners</h6>
                <h5 className="h3 mb-0">Affiliate traffic</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Pie
                    data={pieChartExample}
                    options={{
                      animation: {
                        animateScale: true,
                      },
                    }}
                    className="chart-canvas"
                    id="chart-pie"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <CardHeader>
                <h6 className="surtitle">Overview</h6>
                <h5 className="h3 mb-0">Product comparison</h5>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={multiBarChartExample}
                    className="chart-canvas"
                    id="chart-bar-stacked"
                    options={{
                      scales: {
                        xAxes: {
                          stacked: true,
                        },
                        yAxes: {
                          stacked: true,
                        },
                      },
                      plugins: {
                        tooltip: {
                          mode: "index",
                          intersect: false,
                        },
                      },
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChartsPage;
