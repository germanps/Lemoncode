<template>
    <div class="container-wrapper">
        <form class="form">
            <div class="search-wrapper">
                <input type="text" v-model="companySearch" />
                <button 
                    class="button" 
                    type="submit"
                    @click.prevent="searchByCompany"
                >Buscar</button>
            </div>
            <div class="total-members">
                <span>Total: {{ totalMembers }}</span>
            </div>

        </form>
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
    </div>
</template>

<script setup lang="ts">
    const { members, totalMembers } = await useMembersApi()
    const companySearch = ref('lemoncode')

    const searchByCompany = () => {
        console.log(companySearch.value);
    }
</script>

<style lang="scss" scoped>
    .container-wrapper {
        text-align: center;
        margin: 1rem auto;
        @media screen and (min-width: 550px) {
            max-width: 550;
        }
        @media screen and (min-width: 768px) {
            max-width: 768px;
            
        }
        @media screen and (min-width: 1200px) {
            max-width: 992px;
            
        }
    }
    .total-members {
        width: 240px;
        margin: auto;
        text-align: left;
    }
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