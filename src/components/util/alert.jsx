import { useEffect } from "react";
import { message } from "antd";
import { connect } from "react-redux";

const Alert = ({ data: { alert } }) => {
  useEffect(() => {
    if (alert) {
      message.error(alert);
    }
  }, [alert]);
  return null;
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Alert);
