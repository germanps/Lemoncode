<template>
    <div class="container">
        <NuxtLink to="/" class="back"> Ir atrás </NuxtLink>
        <article>
          <p>{{ member }}</p>
        </article>
    </div>
</template>

<script setup lang="ts">
    import { Member } from '~/types';
    import { membersService } from '~~/services/members'
    
    const route = useRoute()
    const login = route.params.id as string

    const { data: member } = useAsyncData<Member>(() =>
        membersService.getMemberByLogin(login)
    )
    
</script>

<style lang="scss" scoped>
  
</style>