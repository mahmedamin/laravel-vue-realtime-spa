<template>
    <v-card class="mx-2">
        <v-toolbar color="cyan" dark dense class="mt-2">
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>

        <v-list>
            <v-list-item v-for="(category,i) in categories" :key=i>
                <v-list-item-content>
                    <v-list-item-title>{{ category.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "AppSidebar",
    created() {
        axios.get('/api/categories')
            .then(response => this.categories = response.data.data)
            .catch(error => console.log('error', error.response.data));
    },
    data() {
        return {
            categories: []
        }
    }
}
</script>

<style scoped>

</style>
