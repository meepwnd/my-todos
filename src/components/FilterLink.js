import { connect } from "react-redux";
import Link from "./Link";
import { setVisibilityFilters } from "../actions/actions";

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setVisibilityFilters: () => dispatch(setVisibilityFilters(ownProps.filter))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
