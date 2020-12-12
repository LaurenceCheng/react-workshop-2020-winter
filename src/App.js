import { Component } from "react";
import Header from "./Header";
import OperationButtons from "./OperationButtons";
import SelectionRadios from "./SelectionRadios";
import RingTable from "./RingTable";

class App extends Component {
  render() {
    return (
      <>
        <Header
          brand="React Workshop Lab"
          links={["Home", "Feeds"]}
          theme="dark"
        />
        <OperationButtons />
        <SelectionRadios
          radiosText={[
            "Complete",
            "Ongoing",
            "Paused",
            "Failed",
            "Aborted",
            "All",
          ]}
        />
        <RingTable />
      </>
    );
  }
}

export default App;
