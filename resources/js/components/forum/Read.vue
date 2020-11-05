<template>
    <div v-if="question">
        <edit v-if="editing" :question=question @clicked="clickHandler"></edit>
        <show-question v-else :question=question @clicked="clickHandler"></show-question>
    </div>
</template>

<script>
import ShowQuestion from "./ShowQuestion";
import Edit from "./Edit";

export default {
    name: "Read",
    components: {Edit, ShowQuestion},
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
