import { useDispatch, useSelector } from "react-redux";
import { notificationSelector,hideNotification } from "../features/notifications/notificationSlice.js";
import { useEffect } from "react";

function Notification() {
  const dispatch = useDispatch();
  const { message, type, visible } = useSelector(notificationSelector);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, dispatch]);

  if (!visible) return null;

  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500 text-black",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 rounded-lg text-white shadow-lg
                  ${styles[type]}`}
    >
      {message}
    </div>
  );
}

export default Notification;
