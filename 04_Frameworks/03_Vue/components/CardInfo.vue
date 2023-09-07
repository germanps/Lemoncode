<template>
    <article class="member-item">
        <div class="img-wrapper">
            <img class="image" :src="member.avatar_url" />
        </div>
        <p class="paragraph">Nombre: {{ member.login }}</p>
        <p class="paragraph">Rol: {{ member.type }}</p>
    </article>
</template>

<script setup lang="ts">
    import { Member } from '~/types';

    const props = defineProps<{
        member: Member
    }>()
</script>

<style lang="scss" scoped>
     .member-item {
        height: 100%;
        .img-wrapper {
            width: 100%;
            height: 250px;
            margin-bottom: .5rem;
            .image {
                width: 100%;
                height: 210px;
                object-fit: cover;
            }
        }
        .paragraph:not(:last-child) {
            margin-bottom: .5rem;
        }
    }
</style>