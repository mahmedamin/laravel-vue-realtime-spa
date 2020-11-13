<template>
    <v-app>
        <toolbar @updateDarkMode="darkModeSwitcher" :is-dark="isDark"></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import Toolbar from "./Toolbar";
import AppFooter from "./AppFooter";

export default {
    name: "AppHome",
    components: {AppFooter, Toolbar},
    data() {
        return {
            isDark: localStorage.getItem('theme') === 'dark',
        }
    },
    created() {
        this.ckEditorDarkModeSwitcher((localStorage.getItem('theme') === 'dark'));
    },
    methods: {
        darkModeSwitcher(isDark) {
            this.isDark = isDark;
            this.$vuetify.theme.dark = isDark;
            this.ckEditorDarkModeSwitcher(isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        },
        ckEditorDarkModeSwitcher(darkMode) {
            const vars = {
                "ck-text-color": {light: "#101010", dark: "#101010"},
                "ck-color-base-foreground": {light: "#fafafa", dark: "#121212"},
                "ck-color-base-border": {light: "#c4c4c4", dark: "#000000"},
                "ck-color-text": {light: "#333", dark: "#d4d4d4"},
                "ck-color-button-default-hover-background": {light: "#e6e6e6", dark: "#525252"},
                "ck-color-button-on-hover-background": {light: "#c4c4c4", dark: "#525252"},
                "ck-color-button-on-background": {light: "#dedede", dark: "#525252"},
                "ck-color-button-default-active-background": {light: "#d9d9d9", dark: "#525252"},
            };

            for (let variable in vars) {
                let value = vars[variable][darkMode ? 'dark' : 'light'];
                document.documentElement.style.setProperty(`--${variable}`, value);
            }
        }
    }
}
</script>

<style scoped>

</style>
