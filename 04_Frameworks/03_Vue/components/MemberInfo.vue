<template>
    <article v-if="info" class="user-info">
        <div class="img-wrapper">
            <img class="image" :src="props.info?.avatar_url" />
        </div>
        <div class="content">
            <p class="paragraph">Nombre: <span>{{ info?.name }}</span></p>
            <p class="paragraph">Email: <span> {{ info?.email ? info.email : 'Este usuario no tiene Email' }}</span></p>
            <p class="paragraph">Bio: <span>{{ info?.bio ? info?.bio : ' Este usuario no tiene Bio' }}</span></p>
            <p class="paragraph">Ciudad: <span>{{ info?.location }}</span></p>
            <p class="paragraph">Compañia: <span>{{ company }}</span></p>
        </div>
    </article>
</template>

<script setup lang="ts">
    import { MemberDetail } from '~/types';
    const { company } = useCompanyStore()
    const props = defineProps<{
        info: MemberDetail | null
    }>()
    
</script>

<style lang="scss" scoped>
     .user-info{
        height: 100%;
        max-width: 300px;
        margin: auto;
        .img-wrapper {
            width: 100%;
            height: 300px;
            margin-bottom: 0.5rem;
            .image {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }
        }
        .paragraph{
            margin-bottom: .5rem;
            font-weight: bold;
            span {
                font-weight: normal;
            }
        }
    }
</style>