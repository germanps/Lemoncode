<template>
    <ul>
        <li v-for="member in members" :key="member.id">
            {{ member.login }}
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { membersService } from '@/services/members'
    const members = await membersService.get() 
    console.log(members);
 
</script>

<style lang="scss" scoped>
    
</style>