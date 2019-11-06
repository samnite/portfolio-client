import React, { useEffect } from "react";
import { setMainPage } from "../../store/actions/projects-actions";
import { connect } from "react-redux";

const NotFound = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
    // eslint-disable-next-line
  }, []);
  return <div>Page not Found</div>;
};

export default connect(
  null,
  { setMainPage }
)(NotFound);
