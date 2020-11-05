<template></template>
<script>
    export default {
        name: "Logout",
        created() {
            // EventBus.$emit('logout');
            User.logout();
        }
    }
</script>
