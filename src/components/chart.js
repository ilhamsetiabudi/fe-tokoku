import React from "react";
import { Pie } from "react-chartjs-2";

class ChartsPage extends React.Component {
    state = {
        dataPie: {
            labels: ["Red", "Green", "Yellow"],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#F7464A",
                        "#46BFBD",
                        "#FDB45C",
                    ],
                    
                }
            ]
        }
    }

    render() {
        return (
            <div style={{height: '275px'}}>
            <Pie data={this.state.dataPie} options={{ responsive: true }} />
            </div>
        );
    }
}

export default ChartsPage;