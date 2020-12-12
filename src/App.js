import { Component } from "react";
import Header from "./Header";
import OperationButtons from "./OperationButtons";
import SelectionRadios from "./SelectionRadios";
import RingTable from "./RingTable";

class App extends Component {
  state = {
    operation: "",
    statusToShow: "",
  };

  render() {
    return (
      <>
        <Header
          brand="React Workshop Lab"
          links={["Home", "Feeds"]}
          theme="dark"
        />
        <OperationButtons
          onClick={(action) => this.setState({ operation: action })}
        />
        <SelectionRadios
          radiosText={[
            "Complete",
            "Ongoing",
            "Paused",
            "Failed",
            "Aborted",
            "All",
          ]}
          onSelect={(status) => this.setState({ statusToShow: status })}
          selected={this.state.statusToShow}
        />
        <RingTable />
      </>
    );
  }
}

export default App;
