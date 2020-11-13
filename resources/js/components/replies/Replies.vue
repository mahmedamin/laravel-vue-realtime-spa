<template>
    <v-container>
        <reply v-for="reply in replies" :key="reply.id" :reply="reply"></reply>
    </v-container>
</template>

<script>
import Reply from "./Reply";

export default {
    name: "Replies",
    components: {Reply},
    props: {replies: Array}
}
</script>

<style scoped>

</style>
