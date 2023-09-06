<template>
    <div class="container">
        <NuxtLink to="/" class="back"> Ir atrás </NuxtLink>
        <MemberInfo v-if="member" :info="user" />
    </div>
</template>

<script setup lang="ts">
    import { MemberDetail } from '~/types';
    import { membersService } from '~~/services/members'
    const route = useRoute()
    const login = route.params.id as string
    const { data: member } = useAsyncData<MemberDetail>(() =>
        membersService.getMemberByLogin(login)
    )
    const user = member


</script>

<style lang="scss" scoped>
    .container {
        .back {
            margin-top: 1rem;
            display: inline-block;
            color: teal;
            border: 1.5px solid;
            padding: 0.5rem;
            text-decoration: none;
        }
    }
</style>