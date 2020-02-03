import React, { useEffect } from "react";
import { message } from "antd";
import { connect } from "react-redux";

const Alert = ({ data: { alert } }) => {
  useEffect(() => {
    if (alert) {
      error(alert);
    }
    // eslint-disable-next-line
  }, [alert]);

  const error = () => {
    message.error(alert);
  };

  return <div />;
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Alert);
