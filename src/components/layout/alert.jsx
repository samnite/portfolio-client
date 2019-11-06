import React, { useEffect } from "react";
import { message } from "antd";
import { connect } from "react-redux";

const Alert = ({ project: { alert } }) => {
  useEffect(() => {
    if (alert) {
      error(alert);
    }
  }, [alert]);

  const error = () => {
    message.error(alert);
  };

  return <div></div>;
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(Alert);
