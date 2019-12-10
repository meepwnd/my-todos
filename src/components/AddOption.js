import React from "react";
import { addOption } from "../actions/actions";
import { connect } from "react-redux";

export class AddOption extends React.Component {
  state = {
    option: '',
    error: ""
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.option) {
      this.setState(() => ({
        error: "Enter valid option!"
      }));
    } else if (this.props.options.includes(this.state.option)) {
      this.setState(() => ({
        error: "This todo already exists!"
      }));
    } else {
      this.props.addOption(this.state.option);
      this.setState(() => ({
        error: "",
        option: ''
      }));
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p className="error">{this.state.error}</p>}
        <input className="option-input" value={this.state.option} onChange={(e) => this.setState({option: e.target.value.trim()})}/>
        <button className="btn-add-option">add todo</button>
      </form>
    );
  }
}

const mapStateToPops = state => ({
  options: state.options.map(option => option.option)
});

const mapDispatchToProps = dispatch => ({
  addOption: (option, id) => dispatch(addOption(option, id))
});

export default connect(
  mapStateToPops,
  mapDispatchToProps
)(AddOption);
