<template>
    <button class="button" type="submit" @click.prevent="searchCompany">
        Buscar
    </button>
</template>
  
<script lang="ts" setup>
    const $emit = defineEmits(['search-company'])
    const searchCompany = () => {
        $emit('search-company')
    }
</script>

<style lang="scss" scoped>
    .button {
        margin-top: 1rem;
        display: inline-block;
        color: teal;
        border: 1.5px solid;
        padding: 0.5rem;
        border-radius: 0;
        text-decoration: none;
    }
</style>