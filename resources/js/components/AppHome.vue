<template>
    <v-app>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
    import Toolbar from "./Toolbar";
    import AppFooter from "./AppFooter";

    export default {
        name: "AppHome",
        components: {AppFooter, Toolbar}
    }
</script>

<style scoped>

</style>
