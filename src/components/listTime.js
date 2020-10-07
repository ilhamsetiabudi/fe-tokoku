import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Harian")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Mingguan") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Bulanan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class listTimes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      times: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "pembukuan")
      .then((res) => {
        const times = res.data.data;
        this.setState({ times });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    const { times } = this.state;
    const { timesChange, timeTerpilih } = this.props;
    return (
      <Col md={2} className="mt-3">
        <h4>
          <strong></strong>
        </h4>
        <hr />
        <ListGroup className="shadow">
          {times &&
            times.map((time) => (
              <ListGroup.Item
                key={time.id}
                onClick={() => timesChange(time.id)}
                className={timeTerpilih === time.id && "category-aktif"}
                style={{ cursor: 'pointer' }}
              >
                <h5>
                  <Icon nama={time.nama} /> {time.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
