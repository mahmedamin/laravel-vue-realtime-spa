class AppStorage {
    storeAuth(user, token) {
        localStorage.setItem('auth', JSON.stringify({user, token}));
    }

    clearAuth() {
        localStorage.removeItem('auth');
    }

    getToken() {
        return localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).token;
    }

    getUser() {
        return localStorage.getItem('auth') && JSON.parse(localStorage.getItem('auth')).user;
    }
}

export default AppStorage = new AppStorage();
