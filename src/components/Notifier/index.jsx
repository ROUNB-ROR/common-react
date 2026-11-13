import React, { useEffect, useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import ToastHeader from 'react-bootstrap/ToastHeader';
import ToastBody from 'react-bootstrap/ToastBody';

import NotificationService from '../../services/notifying';

//
export default function Notifier() {
  //
  const [notifications, setNotifications] = useState([]);

  //
  const onNotify = (notification) => {
    // Adding notification to the array of notifications
    const NOTIFICATIONS = notifications;
    NOTIFICATIONS.push(notification);

    // Updating the notifications
    setNotifications(NOTIFICATIONS);
  };

  //
  const onClose = (id) => {
    // Removing notification from the array and updating the state
    if (notifications) {
      const n = notifications.filter(
        (notificationInArray) => notificationInArray.id !== id,
      );
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

  return (
    <div className="notifications position-fixed bottom-0 right-0 p-3">
      {
        notifications.map((notification) => (
          <Toast
            key={`notification${notification.id}`}
            id={`notification${notification.id}`}
            show
            autohide
            delay="8000"
            onClose={() => onClose(notification.id)}
          >
            <ToastHeader>
              <strong className="mr-auto">{notification.header}</strong>
            </ToastHeader>
            <ToastBody>{notification.message}</ToastBody>
          </Toast>
        ))
      }
    </div>
  );
}
