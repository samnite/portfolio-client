import { useEffect } from "react";
import { message } from "antd";
import { useSelector } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state.data);

  useEffect(() => {
    if (alert) {
      message.error(alert);
    }
  }, [alert]);
  return null;
};

export default Alert;
