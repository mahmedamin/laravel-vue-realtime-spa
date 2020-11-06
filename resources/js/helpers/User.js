import Token from '../helpers/Token';
import AppStorage from "../helpers/AppStorage";

class User {
    responseAfterLogin(response) {
        const access_token = response.data.access_token;
        if (Token.isValid(access_token)) {
            AppStorage.storeAuth(response.data.user, access_token)
            window.location = '/forum';
        }
    }

    loggedIn() {
        const storedToken = AppStorage.getToken();
        return Boolean(storedToken && Token.isValid(storedToken));
    }

    logout() {
        AppStorage.clearAuth();
        window.location = '/forum';
    }

    get() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            let user = AppStorage.getUser();
            user.id = payload.sub;
            return user;
        }
        return false;
    }

    own(id) {
        return id == this.get().id
    }
}

export default User = new User();
