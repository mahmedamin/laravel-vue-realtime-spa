class Token {
    isValid(token) {
        const payload = this.payload(token);
        return Boolean(payload && payload.iss === "https://realtime_app.dev/api/auth/login" || "https://realtime_app.dev/api/auth/signup");
    }

    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(data) {
        return JSON.parse(atob(data))
    }
}

export default Token = new Token();
