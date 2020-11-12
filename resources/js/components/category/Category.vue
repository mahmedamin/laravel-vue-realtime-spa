<template>
    <v-container>
        <v-form @submit.prevent="!isEditing?create():update()">
            <v-text-field
                v-model="form.name"
                type="text"
                label="Category Name"
                ref="category_name"
                required
                class="mb-0"
            ></v-text-field>
            <p class="mt-n5 red--text" v-if="validationErrors.name">{{validationErrors.name[0]}}</p>

            <div>
                <v-btn type="submit" color="success">{{ isEditing ? 'Update' : 'Insert' }}</v-btn>
                <v-btn type="reset" color="info" v-if="isEditing" @click="cancelEditing">Cancel</v-btn>
            </div>
        </v-form>

        <v-card class="mt-5">
            <confirmation-dialog description="You want to delete this category?" color_yes="red" color_no="blue"
                                 @clicked="onActionClick" :open_dialog="confirmationDialog"></confirmation-dialog>

            <v-toolbar color="indigo" dark dense>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>

            <v-list>
                <transition-group name="slide">
                    <v-list-item
                        :class="{highlighted:(currentAction.category && currentAction.category.id)==category.id}"
                        v-if="categories.length"
                        v-for="(category,index) in categories" :key="`k-${index}`">
                        <v-list-item-content>
                            <v-list-item-title>{{ category.name }}</v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action v-if="(currentAction.category && currentAction.category.id)!=category.id">
                            <v-flex>
                                <v-btn icon small @click="edit(index)">
                                    <v-icon color="orange">{{ icons.mdiAccountEdit }}</v-icon>
                                </v-btn>
                                <v-btn icon small @click="()=>{
                                    currentAction={category,index};
                                    confirmationDialog=true;
                                }">
                                    <v-icon color="red">{{ icons.mdiDelete }}</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-list-item-action>
                        <p v-else class="my-auto">performing..</p>
                    </v-list-item>
                </transition-group>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
import {mdiAccountEdit, mdiDelete} from '@mdi/js'
import ConfirmationDialog from "../dialogs/ConfirmationDialog"

const _defaults = () => {
    return {
        currentAction: {index: null, category: null}
    }
};
export default {
    name: "Create",
    components: {ConfirmationDialog},
    created() {
        axios.get('/api/categories')
            .then(response => this.categories = response.data.data)
            .catch(error => {
                if (error.response.status == 422) {
                    this.validationErrors = error.response.data.errors;
                }
            });
    },
    data() {
        return {
            form: {
                name: null
            },
            isEditing: false,
            categories: [],
            currentAction: JSON.parse(JSON.stringify(_defaults().currentAction)),
            icons: {
                mdiAccountEdit, mdiDelete
            },
            confirmationDialog: false,
            validationErrors: []
        }
    },
    methods: {
        create() {
            axios.post('/api/categories', this.form)
                .then(response => {
                    this.categories.unshift(response.data.category);
                    this.form.name = null;
                    this.validationErrors=[];
                }).catch(error => {
                if (error.response.status == 422) {
                    this.validationErrors = error.response.data.errors;
                }
            });
        },
        destroy() {
            axios.delete(`/api/categories/${this.currentAction.category.slug}`)
                .then(response => {
                    this.categories.splice(this.currentAction.index, 1);
                })
                .catch(error => console.log('error', error.response.data));
        },
        onActionClick(value) {
            if (value.perform_action)
                this.destroy();
            else
                this.currentAction = _defaults().currentAction;

            this.confirmationDialog = false;
            this.form.name = null;
        },
        edit(index) {
            this.isEditing = true;
            this.currentAction = {category: this.categories[index], index};
            this.form = _.pick(this.categories[index], 'name');
            window.scrollTo(0, 0);
            this.$refs.category_name.focus();
        },
        cancelEditing() {
            this.isEditing = false;
            this.currentAction = _defaults().currentAction;
            this.form.name = null;
            this.validationErrors=[];
        },
        update() {
            axios.put(`/api/categories/${this.currentAction.category.slug}`, this.form)
                .then(response => {
                    this.categories[this.currentAction.index] = response.data.category;
                    this.form.name = null;
                    this.validationErrors=[];
                    this.currentAction = _defaults().currentAction;
                    this.isEditing = false;
                }).catch(error => {
                if (error.response.status == 422) {
                    this.validationErrors = error.response.data.errors;
                }
            });
        },
    }
}
</script>

<style scoped>
.highlighted {
    background-color: rgba(5, 125, 230, 0.3);
}
</style>
