<template>
    <show-question :data="question"></show-question>
</template>

<script>
import ShowQuestion from "./ShowQuestion";

export default {
    name: "Read",
    components: {ShowQuestion},
    data() {
        return {
            question: {}
        }
    },
    created() {
        axios.get(`/api/questions/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
            .catch(err => console.log('err', err));
    }
}
</script>
