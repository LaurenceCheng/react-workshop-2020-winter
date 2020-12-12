import { Component } from "react";
import Header from "./Header";
import OperationButtons from "./OperationButtons";
import SelectionRadios from "./SelectionRadios";
import RingTable from "./RingTable";

class App extends Component {
  state = {
    allData: [],
    displayedData: [],
    operation: "",
    statusToShow: "",
  };

  componentDidMount() {
    fetch("https://run.mocky.io/v3/adc0e655-b26f-4738-a0d8-9cc976a8fa36")
      .then((response) => response.json())
      .then((data) => this.setState({ allData: data, displayedData: data }));
  }

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
        <RingTable rows={this.state.displayedData} />
      </>
    );
  }
}

export default App;
