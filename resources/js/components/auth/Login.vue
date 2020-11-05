<template>
    <v-container>
        <v-alert
            border="top"
            color="red lighten-2"
            dark v-if="errors.length"
        >
            <b>Please review the errors below:</b>
            <ul>
                <li v-for="(error,i) in errors" :key="i">{{ error.value }}</li>
            </ul>
        </v-alert>

        <v-form
            @submit.prevent="login"
        >
            <v-text-field
                v-model="form.email"
                type="email"
                label="E-mail"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                type="password"
                label="Password"
                required
            ></v-text-field>

            <v-btn type="submit" color="success">
                Login
            </v-btn>

            <router-link to="/signup">
                <v-btn text color="primary">Signup</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
export default {
    created() {
        if (User.loggedIn())
            this.$router.push({name: 'forum'});
    },
    data() {
        return {
            form: {
                email: null,
                password: null
            },
            errors: []
        }
    },
    methods: {
        login() {
            this.errors = [];
            axios.post('/api/auth/login', this.form)
                .then(response => User.responseAfterLogin(response))
                .catch(error => this.errors = [
                    {
                        type: error.response.statusText.toLocaleLowerCase(),
                        value: "Invalid username or password!"
                    }
                ]);
        }
    }
}
</script>
