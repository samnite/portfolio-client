import React, { useEffect } from "react";
import { setMainPage } from "../../store/actions/projects-actions";
import { connect } from "react-redux";

const About = ({ setMainPage }) => {
  useEffect(() => {
    setMainPage(false);
  }, []);
  return <div>This is About Page</div>;
};

export default connect(
  null,
  { setMainPage }
)(About);
