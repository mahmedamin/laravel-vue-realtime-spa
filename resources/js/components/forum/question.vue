<template>
    <v-card
        class="mx-auto"
    >
        <v-card-title>
            <router-link :to="data.path">
                {{ data.title }}
            </router-link>
        </v-card-title>

        <v-card-subtitle>
            {{ data.user }} said {{ data.created_at }}
        </v-card-subtitle>

        <v-card-text>
            {{ data.body }}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "question",
    props: ['data']
}
</script>
