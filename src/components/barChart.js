import React from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { API_URL } from "../utils/constants";

class BarChart extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            timeYangDipilih: '1',
            data: []
      }
    }

      componentDidMount() {
        axios
          .get(API_URL + "pembukuan/pie/" + this.state.timeYangDipilih)
          .then((res) => {
            this.setState({
              data: res.data.data
            });
          })
          .catch((error) => {
            console.log("Error yaa ", error);
          });
        }    


  render() {
    return (
        <div style={{height: '300px'}}>
            <div></div>
            {this.state.data.map((data, idx) => {
                const dataBar = {
                    labels: data.name,
                    datasets: [
                        {
                            label: "Penjualan",
                            data: data.data,
                            backgroundColor: [
                              "rgba(255, 134,159,0.4)",
                              "rgba(98,  182, 239,0.4)",
                              "rgba(255, 218, 128,0.4)",
                              "rgba(113, 205, 205,0.4)",
                              "rgba(170, 128, 252,0.4)",
                              "rgba(255, 177, 101,0.4)"
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
    );
  }
}

export default BarChart;