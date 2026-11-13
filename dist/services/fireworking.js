//
export default class FireworksService {
  static makeFireworks(time) {
    if (FireworksService.onDoFireworks) FireworksService.onDoFireworks(time);
  }
}
FireworksService.onDoFireworks = null;