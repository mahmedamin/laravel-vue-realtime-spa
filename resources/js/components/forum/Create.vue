<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                v-model="form.title"
                type="text"
                label="Title"
                required
            ></v-text-field>

            <v-autocomplete
                :items="categories"
                item-value="id"
                item-text="name"
                v-model="form.category_id"
                label="Category"
            ></v-autocomplete>

            <ckeditor :editor="editor" v-model="form.body"></ckeditor>

            <v-btn type="submit" color="success">
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "Create",
    data() {
        return {
            editor: ClassicEditor,
            form: {
                title: null,
                category_id: null,
                body: null
            },
            categories: [],
            error: null
        }
    },
    created() {
        axios.get('/api/categories')
            .then(response => this.categories = response.data.data);
    },
    methods: {
        create() {
            axios.post('/api/questions', this.form)
                .then(response => this.$router.push(response.data.path))
        }
    }
}
</script>

<style>
.ck-editor__editable {
    min-height: 200px;
    margin-bottom: 10px;
}
</style>
