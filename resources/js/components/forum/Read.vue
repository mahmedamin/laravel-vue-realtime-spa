<template>
    <div v-if="question">
        <edit v-if="editing" :question=question @clicked="clickHandler"></edit>
        <show-question v-else :question=question @clicked="clickHandler"></show-question>
        <v-container>
            <replies :replies="question.replies"></replies>
            <create-reply>

            </create-reply>
        </v-container>
    </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import Edit from "./Edit";
import Replies from "../replies/Replies";
import CreateReply from "../replies/Create";

export default {
    name: "Read",
    components: {CreateReply, Replies, Edit, ShowQuestion},
    data() {
        return {
            question: null,
            editing: false
        }
    },
    created() {
        axios.get(`/api/questions/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
            .catch(err => console.log('err', err));
    },
    methods: {
        clickHandler(params) {
            if (params.type == 'edit_mode')
                this.editing = params.enable;
        }
    }
}
</script>
