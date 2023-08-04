import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';
import NotificationService from './service';

//
export default function Notifier() {
  //
  const [notifications, setNotifications] = useState([]);

  //
  const onNotify = notification => {
    // Adding notification to the array of notifications
    const NOTIFICATIONS = notifications;
    NOTIFICATIONS.push(notification);

    // Updating the notifications
    setNotifications(NOTIFICATIONS);
  };

  //
  const onClose = id => {
    // Removing notification from the array and updating the state
    if (notifications) {
      const n = notifications.filter(notificationInArray => notificationInArray.id !== id);
      setNotifications(n);
    }
  };

  // registering callback function for notifications
  NotificationService.onNotify = onNotify;

  //
  useEffect(() => () => {
    // Cleaning the notifier callback
    NotificationService.onNotify = null;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "notifications position-fixed bottom-0 right-0 p-3"
  }, notifications.map(notification => /*#__PURE__*/React.createElement(Toast, {
    key: `notification${notification.id}`,
    id: `notification${notification.id}`,
    show: true,
    autohide: true,
    delay: "8000",
    onClose: () => onClose(notification.id)
  }, /*#__PURE__*/React.createElement(ToastHeader, null, /*#__PURE__*/React.createElement("strong", {
    className: "mr-auto"
  }, notification.header)), /*#__PURE__*/React.createElement(ToastBody, null, notification.message))));
}