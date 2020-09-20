<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar dense>
<!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

            <v-toolbar-title>Realtime App</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="hidden-sm-and-down">
                <v-btn text>Forum</v-btn>
                <v-btn text>Ask Questions</v-btn>
                <v-btn text>Category</v-btn>
                <router-link to="/login">
                    <v-btn text>Login</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "Toolbar"
    }
</script>

<style scoped>

</style>
