import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { connect } from "react-redux";
import { setRings } from "./redux/modules/rings";

const getBadgeVariant = (status) => {
  switch (status) {
    case "Complete":
      return "success";

    case "Ongoing":
      return "warning";

    case "Failed":
      return "danger";

    case "Aborted":
      return "dark";

    default:
      return "secondary";
  }
};

class RingTable extends Component {
  state = { allData: [], displayedData: [] };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => this.setState({ allData: data, displayedData: data }));
  }

  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>Rollout Status</th>
            <th>Windows</th>
            <th>Linux</th>
            <th>Unix</th>
          </tr>
        </thead>
        <tbody>
          {this.state.displayedData.map((row, index) => (
            <tr key={`ring-row${index}`}>
              <td>{row.target}</td>
              <td>
                <Badge variant={getBadgeVariant(row.status)}>
                  {row.status}
                </Badge>
              </td>
              <td>{row.windows}</td>
              <td>{row.linux}</td>
              <td>{row.unix}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setRings: (data) => dispatch(setRings(data)),
});

export default connect(null, mapDispatchToProps)(RingTable);
