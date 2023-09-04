<template>
    <ul class="members-list">
        <li class="members-list__item" v-for="member in members" :key="member.id">
            <NuxtLink :to="`/member/${member.login}`" class="link"> 
                <article class="member-item">
                    <div class="img-wrapper">
                        <img class="image" :src="member.avatar_url" />
                    </div>
                    <p class="paragraph">Nombre: {{ member.login }}</p>
                    <p class="paragraph">Rol: {{ member.type }}</p>
                </article>
            </NuxtLink> 
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { membersService } from '@/services/members'
    import { Member } from '~/types';
    const members: Member[] = await membersService.get() 
 
</script>

<style lang="scss" scoped>
    .members-list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 2rem;
        padding: 2rem 0;
        margin: 0 auto;
        width: max-content;
        @media screen and (min-width: 550px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }
        &__item {
            box-shadow: 5px 5px 15px 0px gray;
            height: 350px;
            box-sizing: border-box;
            padding: .5rem;
            text-align: center;
            border-radius: 2px;
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
        }
    }
</style>