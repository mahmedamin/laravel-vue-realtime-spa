<template>
    <div>
        <reply v-for="reply in replies" :key="reply.id" v-if="replies" :reply="reply"></reply>
    </div>
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
