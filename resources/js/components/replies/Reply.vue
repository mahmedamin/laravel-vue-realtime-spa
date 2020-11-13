<template>
    <div class="my-3">
        <v-card>
            <v-card-title>
                <p class="headline">{{reply.reply}}</p>
                <p>said {{reply.created_at}}</p>
            </v-card-title>
            <v-card-text v-html="reply.body"></v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Reply",
    props: {reply: Object}
}
</script>

<style scoped>

</style>
