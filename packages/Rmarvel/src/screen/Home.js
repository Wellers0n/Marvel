import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Offset } from "./../actions/index";
import { connect } from "react-redux";

const Home = ({ stateOffset, increment }) => {
  useEffect(() => {
    console.log(stateOffset);
  }, []);

  return (
  <div>
    <div>{stateOffset}</div>
    <button title='click' onClick={increment}/>
  </div>
  );
};

const mapStateToProps = state => ({
  stateOffset: state.offset.offset
});

const mapDispatchToProps = dispatch => {
  return {
    increment: bindActionCreators(Offset, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
