import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Harian = ({ sum }) => {
  return (
    <Col md={4} xs={6} className="mb-3">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={sum.gambar}
        />
        <Card.Body>
          <Card.Title>{sum.categogry} <strong>({sum.totalItem})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(sum.totalHarga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Harian;
