// Service provides ability for the notifications to be handled
export default class NotificationService {
  //
  static notify(header, message) {
    const NOTIFICATION = {
      id: NotificationService.newId += 1,
      header,
      message
    };
    if (NotificationService.onNotify) NotificationService.onNotify(NOTIFICATION);
  }
}
NotificationService.onNotify = null;
NotificationService.newId = 1;