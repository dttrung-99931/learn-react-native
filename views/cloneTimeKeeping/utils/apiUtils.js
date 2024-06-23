export default class ApiUtils {
  static getHeader() {
    return new Headers({
      'Content-Type': 'application/json',
    });
  }
}
