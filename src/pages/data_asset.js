import React, { Component } from "react";
import { ListTimes } from "../components";
import { Row, Col, Container, Card, Table, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

export default class Data extends Component {

    constructor(props) {
        super(props);

        this.state = {
            summaries: [],
            timeYangDipilih: "1",
            table: [],
            pie: [],
            bar: []
        };
    }
    componentDidMount() {
        axios
            .get(API_URL + "pembukuan/summary/" + this.state.timeYangDipilih)
            .then((res) => {
                this.setState({
                    summaries: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/table/" + this.state.timeYangDipilih)
            .then((res) => {
                this.setState({
                    table: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/pie/" + this.state.timeYangDipilih)
            .then((res) => {
                this.setState({
                    pie: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/bar/" + this.state.timeYangDipilih)
            .then((res) => {
                this.setState({
                    bar: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

    }

    changeCategory = (value) => {
        this.setState({
            categoriYangDipilih: value,
            catatan: [],
        });

        axios
            .get(API_URL + "pembukuan/summary/" + value)
            .then((res) => {
                this.setState({
                    summaries: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/table/" + value)
            .then((res) => {
                this.setState({
                    table: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/pie/" + value)
            .then((res) => {
                this.setState({
                    pie: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });

        axios
            .get(API_URL + "pembukuan/bar/" + value)
            .then((res) => {
                this.setState({
                    bar: res.data.data
                });
            })
            .catch((error) => {
                console.log("Error yaa ", error);
            });
    };

    render() {
        const { timeYangDipilih } = this.state;
        return (
            <div className="mt-3">
                <Container fluid>
                    <Row>
                        <ListTimes
                            timesChange={this.changeCategory}
                            timeYangDipilih={timeYangDipilih}
                        />
                        {this.state.summaries.map((data, idx) => {
                            return (
                                <Col key={idx} md={2} xs={6} className="mt-3">
                                    <hr />
                                    <Card className="shadow">
                                        <Card.Header style={{ backgroundColor: '#22668A', color: 'white' }}>
                                            <center>
                                                <strong>Total Harian</strong>
                                            </center>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{ fontSize: '20px' }}>
                                                <center>
                                                    {data.totalItem} {data.category}
                                                </center>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <br></br>
                        <Col md={2} className="mt-3">
                            <ListGroup className="shadow" defaultActiveKey="/pembukuan">
                                <ListGroup.Item action href="/home">
                                    <strong>Home</strong>
                                </ListGroup.Item>
                                <ListGroup.Item action href="/pembukuan">
                                    <strong>Pembukuan</strong>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={6}>
                            <h6>4 Product Terlaris</h6>
                            <Card className="shadow mt-3">
                                <div style={{ height: '300px' }}>
                                    <div></div>
                                    {this.state.pie.map((data, idx) => {
                                        const dataBar = {
                                            labels: data.name,
                                            datasets: [
                                                {
                                                    label: "Penjualan",
                                                    data: data.data,
                                                    backgroundColor: [
                                                        "#F7464A",
                                                        "#46BFBD",
                                                        "#FDB45C",
                                                        "#22668A",
                                                    ],
                                                    borderWidth: 2,
                                                    borderColor: [
                                                        "rgba(255, 134, 159, 1)",
                                                        "rgba(98,  182, 239, 1)",
                                                        "rgba(255, 218, 128, 1)",
                                                        "rgba(113, 205, 205, 1)",
                                                        "rgba(170, 128, 252, 1)",
                                                        "rgba(255, 177, 101, 1)"
                                                    ]
                                                }
                                            ]
                                        }
                                        return (
                                            <Bar data={dataBar} />
                                        )

                                    })}
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <h6>Pesentase 4 Product Terlaris</h6>
                            <Card className="shadow mt-3" >
                                <div></div>
                                {this.state.bar.map((data, idx) => {
                                    const dataPie = {
                                        labels: data.name,
                                        datasets: [
                                            {
                                                data: data.data,
                                                backgroundColor: [
                                                    "#F7464A",
                                                    "#46BFBD",
                                                    "#FDB45C",
                                                ],

                                            }
                                        ]
                                    }
                                    return (
                                        <div style={{ height: '275px' }} className="mt-4">
                                            <Pie key={idx} data={dataPie} options={{ responsive: true }} />
                                        </div>
                                    )
                                })}

                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <div></div>
                        </Col>
                        <Col md={10} className="mt-5">
                            <h6>Tabel Penjualan</h6>
                            <Table responsive="sm" className="shadow mt-3">
                                <thead>
                                    <tr style={{ backgroundColor: '#22668A', color: 'white' }}>
                                        <th><center>No</center></th>
                                        <th><center>Kode Product</center></th>
                                        <th><center>Nama Product</center></th>
                                        <th><center>Category</center></th>
                                        <th><center>Total Pembeli</center></th>
                                        <th><center>Total Harga</center></th>
                                    </tr>
                                </thead>
                                {this.state.table.map((data, idx) => {
                                    return (
                                        <tbody >
                                            <tr>
                                                <td><center>{data.no}</center></td>
                                                <td><center>{data.kode}</center></td>
                                                <td><center>{data.nama}</center></td>
                                                <td><center>{data.category}</center></td>
                                                <td><center>{data.item}</center></td>
                                                <td><center>{data.harga}</center></td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
