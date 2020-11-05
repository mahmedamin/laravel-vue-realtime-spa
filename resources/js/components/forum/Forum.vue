<template>
    <v-container fluid grid-item-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question v-for="question in questions" :key="question.path" :data="question"></question>
            </v-flex>
            Sidebar
        </v-layout>
    </v-container>
</template>

<script>
import Question from "./Question";

export default {
    name: "Forum",
    components: {Question},
    data() {
        return {
            questions: []
        }
    },
    created() {
        axios.get('/api/questions')
            .then(res => this.questions = res.data.data)
            .catch(err => console.log('err', err))
    }
}
</script>

<style scoped>

</style>
