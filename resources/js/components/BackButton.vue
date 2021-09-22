<template>
     <button 
        type="button"    
        @click="hasHistory() 
            ? $router.go(-1) 
            : $router.push('/')" class="btn  btn-lg btn-outline-danger">&laquo; 
        Back
    </button>
</template>
<script>
    export default {
        name: 'BackButton',
        methods: {
            hasHistory () { return window.history.length > 2 }
        }
    }
</script>