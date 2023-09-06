<template>
    <div class="container-wrapper">
        <form class="form">
            <div class="search-wrapper">
                <input class="search-input" type="text" v-model="companyInputSearch" />
                <SearchButton @searchCompany="searchByCompany" />
            </div>
            <div class="total-members">
                <span>Total: {{ total }}</span>
                {{ companyInputSearch }}
            </div>
        </form>
        <div class="members-error" v-if="!membersSearch || membersSearch.length === 0">No se han encontrado miembros para esta organización: {{ companyInputSearch }}</div>
        <ul v-else class="members-list">
            <li class="members-list__item" v-for="member in membersSearch" :key="member.id">
                <NuxtLink :to="`/member/${member.login}`" :company="company" class="link"> 
                    <CardInfo :member="member" />
                </NuxtLink> 
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia'
    import { membersService } from '~/services/members'
    const store  = useCompanyStore()
    const { company } = storeToRefs(store)
    const { members, totalMembers } = await useMembersApi()
    const companyInputSearch = ref(company) // set company in store
    let total: any = ref(totalMembers)
    let membersSearch: any = ref(members); //set members in local variable

    const searchByCompany = async () => {
        //get members by new search when click btn
        const membersBySearch = await membersService.get()
        //set new data in local variables
        total = membersBySearch.length
        membersSearch.value = membersBySearch
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
    .search-wrapper {
        .search-input {
            height: 32px;
            padding: 0 5px;
            border: 1.5px solid teal;
            margin-right: .5rem;
            font-weight: bold;
            color: teal;
            &:focus {
                outline: none;
            }
        }
    }
    .members-error {
        margin-top: 2rem;
        font-size: 1.1rem;
        color: red;
        font-weight: bold;
        font-style: italic;
    }
    .total-members {
        width: 240px;
        margin: 1.5rem auto 0;
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
        }
    }
</style>