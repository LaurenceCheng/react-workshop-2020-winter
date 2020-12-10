import React from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge"

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

const RingTable = () => (
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
      <tr>
        <td>GIS</td>
        <td><Badge variant={getBadgeVariant('Complete')}>Complete</Badge></td>
        <td>20.0.0-211</td>
        <td>20.0.0-211</td>
        <td>20.0.0-211</td>
      </tr>
    </tbody>
  </Table>
);

export default RingTable;
