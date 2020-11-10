<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar dense>
            <v-toolbar-title>Realtime App</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="hidden-sm-and-down">
                <router-link v-for="navigation in navigations" :key="navigation.title" :to="navigation.to"
                             v-if="navigation.visible">
                    <v-btn text>{{navigation.title}}</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Toolbar",
        // created(){
        //     EventBus.$on('logout',function () {
        //         User.logout();
        //     });
        // },
        data() {
            return {
                navigations: [
                    {title: "Forum", to: "/forum", visible: true},
                    {title: "Ask Questions", to: "/ask", visible: User.loggedIn()},
                    {title: "Category", to: {name:'categories'}, visible: User.loggedIn()},
                    {title: "Login", to: "/login", visible: !User.loggedIn()},
                    {title: "Logout", to: "/logout", visible: User.loggedIn()},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
