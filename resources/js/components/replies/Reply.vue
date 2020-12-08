<template>
    <div class="my-3">
        <v-card>
            <v-card-title>
                <p class="headline">{{reply.user.name}}</p>
                <p class="ml-2">said {{reply.created_at}}</p>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="reply.reply"></v-card-text>
            <v-divider></v-divider>
            <v-card-actions v-if="own">
                <v-btn icon small>
<!--                    <v-icon color="orange" @click="enableEditMode">{{ icons.mdiAccountEdit }}</v-icon>-->
                </v-btn>
                <v-btn icon small @click="confirmationDialog=true">
<!--                    <v-icon color="red">{{ icons.mdiDelete }}</v-icon>-->
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import {mdiAccountEdit, mdiDelete} from '@mdi/js'
import ConfirmationDialog from "../dialogs/ConfirmationDialog"
export default {
    name: "Reply",
    props: {reply: Object},
    data(){
        return {
            icons: {
                mdiAccountEdit, mdiDelete
            },
        }
    },
    computed:{
        own(){
            return User.own(this.reply.user.id)
        }
    }
}
</script>

<style scoped>

</style>
