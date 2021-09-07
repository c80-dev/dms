<template>
    <router-view />
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'App',
        async created() {
            const response = await axios.get('user-profile');
            this.$store.dispatch('user', response.data.data);
        }
    }
</script>

