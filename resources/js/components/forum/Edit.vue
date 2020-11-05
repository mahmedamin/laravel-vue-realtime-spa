<template>
    <v-container fluid>
        <v-card>
            <v-form @submit.prevent="update">
                <v-text-field
                    v-model="form.title"
                    type="text"
                    label="Title"
                    required
                ></v-text-field>

                <ckeditor :editor="editor" v-model="form.body"></ckeditor>

                <v-card-actions>
                    <v-btn type="submit" icon small>
                        <v-icon color="teal">{{ icons.mdiContentSaveEdit }}</v-icon>
                    </v-btn>
                    <v-btn type="button" icon small @click="disableEditMode">
                        <v-icon color="teal">{{ icons.mdiCancel }}</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import {mdiContentSaveEdit, mdiCancel} from '@mdi/js'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    name: "Edit",
    props: {
        question: Object
    },
    data() {
        return {
            editor: ClassicEditor,
            icons: {mdiContentSaveEdit, mdiCancel},
            form: {
                title: null,
                body: null
            }
        }
    },
    created() {
        this.form = _.pick(this.question, 'title', 'body', 'slug');
    },
    methods: {
        disableEditMode() {
            this.$emit('clicked', {type: 'edit_mode', enable: false});
        },
        update() {
            axios.put(`/api/questions/${this.form.slug}`, this.form)
                .then(response => {
                    let newSlug = response.data.slug;
                    this.question = _.merge(this.question, this.form, {slug: newSlug});
                    this.disableEditMode();
                    if (this.form.slug != newSlug)
                        this.$router.push({name: 'read-question', params: {slug: newSlug}});
                }).catch(error => console.log('error', error.response.data));
        }
    }
}
</script>

<style scoped>

</style>
