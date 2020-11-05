<template>
    <v-container>
        <v-form
            @submit.prevent="signup"
        >
            <v-text-field
                v-model="form.name"
                type="text"
                label="Name"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

            <v-text-field
                v-model="form.email"
                type="email"
                label="E-mail"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>

            <v-text-field
                v-model="form.password"
                type="password"
                label="Password"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

            <v-text-field
                v-model="form.password_confirmation"
                type="password"
                label="Confirm Password"
                required
            ></v-text-field>

            <v-btn type="submit" color="success">
                Signup
            </v-btn>

            <router-link to="/login">
                <v-btn text color="primary">Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Signup",
        created() {
            if (User.loggedIn())
                this.$router.push({name: 'forum'});
        },
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                },
                errors: {}
            }
        },
        methods: {
            signup() {
                axios.post('/api/auth/signup', this.form)
                    .then(response => {
                        this.errors = {};
                        User.responseAfterLogin(response);
                    })
                    .catch(error => this.errors = error.response.data.errors);
            }
        }

    }
</script>

<style scoped>

</style>
