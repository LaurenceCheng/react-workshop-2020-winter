import { Component } from "react";
import Header from "./Header";
import OperationButtons from "./OperationButtons";
import SelectionRadios from "./SelectionRadios";
import RingTable from "./RingTable";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <OperationButtons />
        <SelectionRadios />
        <RingTable />
      </>
    );
  }
}

export default App;
