import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  isAdmin() {
    const token = this.getToken();
    const role = decode(token).data.role;
    return role === 'admin';
  }
  isStylist() {
    const token = this.getToken();
    const role = decode(token).data.role;
    return role === 'stylist';
  }
  isClient() {
    const token = this.getToken();
    const role = decode(token).data.role;
    return role === 'client';
  }

  getUserId() {
    const token = this.getToken();
    const _id = decode(token).data._id;
    return _id
  }
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);

    window.location.assign("/");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.assign("/");
  }
}

export default new AuthService();
