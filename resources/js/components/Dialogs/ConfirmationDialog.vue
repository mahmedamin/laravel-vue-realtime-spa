<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="290"
        >
            <v-card>
                <v-card-title class="headline">{{ title }}</v-card-title>
                <v-card-text>{{ description }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        :color="color_yes+' darken-1'"
                        text
                        @click="onClickButton(true)"
                    >
                        {{ text_yes }}
                    </v-btn>
                    <v-btn
                        :color="color_no+' darken-1'"
                        text
                        @click="onClickButton(false)"
                    >
                        {{ text_no }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "ConfirmationDialog",
    props: {
        title: {
            default: 'Are you sure?',
        },
        description: {
            default: 'You want to perform this action?',
        },
        text_yes: {
            default: 'Yes',
        },
        color_yes: {
            default: 'green',
        },
        text_no: {
            default: 'No',
        },
        color_no: {
            default: 'red',
        },
        open_dialog: {
            default: false,
            type: Boolean
        },


    },
    data() {
        return {
            dialog: this.open_dialog,
        }
    },
    watch: {
        open_dialog(newVal, oldVal) {
            this.dialog = newVal;
        }
    },
    methods: {
        onClickButton(perform_action) {
            this.$emit('clicked', {perform_action})
        },
    }
}
</script>

<style scoped>

</style>
