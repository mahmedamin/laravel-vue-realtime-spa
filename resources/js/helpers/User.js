import Token from './Token';
import AppStorage from "./AppStorage";

class User {
    login(data) {
        axios.post('/api/auth/login', data)
            .then(response => {
                const access_token = response.data.access_token;
                if (Token.isValid(access_token)) {
                    AppStorage.storeAuth(response.data.user, access_token)
                }
            })
            .catch(error => console.log('error', error.response.data))
    }

    loggedIn() {
        const storedToken = AppStorage.getToken();
        return Boolean(storedToken && Token.isValid(storedToken));
    }

    logout() {
        AppStorage.clearAuth();
    }

    get() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            let user = AppStorage.getUser();
            user.id = payload.sub;
            return console.log('user', user)
        }
        return false;
    }
}

export default User = new User();
