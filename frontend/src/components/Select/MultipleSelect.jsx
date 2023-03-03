import React from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

import Select from "react-select";

class MultipleSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedOption: "", options: this.props.options };
  }

  componentDidMount() {
    this.props.options.forEach(element => {
      element.value = element.id
      element.label = element.name_vi
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () => {
      this.props.onChangeSelect(this.state.selectedOption);
    });
  };

  render() {
    return (
      <Select
        isMulti
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
      />
    );
  }
}

export default MultipleSelect;
// ReactDOM.render(<MultipleSelect />, document.getElementById("app"));