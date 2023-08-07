export default class GaHelper {
  // Sets the tag for further reporting
  static setTag(tag) {
    GaHelper.tag = tag;
  }

  // Records pageview
  static recordPageview() {
    if (GaHelper.tag) {
      // Recording the pageview
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
        send_to: GaHelper.tag
      });
    } else {
      // eslint-disable-next-line no-console
      console.error('GaHelper tag is not set.');
    }
  }
}
GaHelper.tag = null;