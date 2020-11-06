<template>
    <v-container fluid grid-item-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question v-for="question in questions" :key="question.path" :data="question"></question>
            </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Question from "./Question";
import AppSidebar from "./AppSidebar";

export default {
    name: "Forum",
    components: {AppSidebar, Question},
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
