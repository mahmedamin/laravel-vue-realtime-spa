<template>
    <v-card>
        <confirmation-dialog description="You want to delete this question?" color_yes="red" color_no="blue"
                             @clicked="onActionClick" :open_dialog="confirmationDialog"></confirmation-dialog>
        <v-container fluid>
            <v-card-title>
                <div>
                    <div class="headline">{{ question.title }}</div>
                    <span class="grey--text">{{ question.user ? question.user.name : '' }} said
                        {{ question.created_at }}</span>
                </div>
                <v-spacer></v-spacer>
                <v-btn class="teal">5 Replies</v-btn>
            </v-card-title>
            <v-card-text v-html="question.body"></v-card-text>
            <v-card-actions v-if="own">
                <v-btn icon small>
                    <v-icon color="orange" @click="enableEditMode">{{ icons.mdiAccountEdit }}</v-icon>
                </v-btn>
                <v-btn icon small @click="confirmationDialog=true">
                    <v-icon color="red">{{ icons.mdiDelete }}</v-icon>
                </v-btn>
            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
import {mdiAccountEdit, mdiDelete} from '@mdi/js'
import ConfirmationDialog from "../dialogs/ConfirmationDialog"

export default {
    components: {ConfirmationDialog},
    props: ['question'],
    data() {
        return {
            icons: {
                mdiAccountEdit, mdiDelete
            },
            own: User.own(this.question.user.id),
            confirmationDialog: false
        }
    },
    methods: {
        onActionClick(value) {
            if (value.perform_action)
                this.destroy();
            this.confirmationDialog = false;
        },
        destroy() {
            axios.delete(`/api/questions/${this.question.slug}`)
                .then(response => this.$router.push('/forum'))
                .catch(error => console.log('error', error.response.data))
        },
        enableEditMode() {
            this.$emit('clicked', {type: 'edit_mode', enable: true});
        }
    }
}
</script>

<style scoped>

</style>
