<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                v-model="form.name"
                type="text"
                label="Category Name"
                required
            ></v-text-field>

            <v-btn type="submit" color="success">
                Submit
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: "Create",
    data() {
        return {
            form: {
                name: null
            }
        }
    },
    methods: {
        create() {
            //
        }
    }
}
</script>

<style scoped>

</style>
